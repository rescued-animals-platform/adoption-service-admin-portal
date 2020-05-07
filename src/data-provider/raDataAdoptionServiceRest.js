import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';

const sortKeyMapper = new Map([
    ['state.name', 'stateName']
]);

/**
 * Maps react-admin queries to the Adoption Service REST API
 *
 *
 * @example
 *
 * getList     => GET http://my.api.url/admin/animals?page=1&size=10&sort=name,asc&sort=clinicalRecord,desc
 * getOne      => GET http://my.api.url/admin/animals/123
 * getMany     => GET http://my.api.url/admin/animals?id=123&id=345&id=567
 * update      => PUT http://my.api.url/admin/animals/123
 * create      => POST http://my.api.url/admin/animals
 *
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson): DataProvider => ({

    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        let sortingField = field;
        if (sortKeyMapper.has(field)) {
            sortingField = sortKeyMapper.get(field);
        }

        const query = {
            sort: `${sortingField},${order}`,
            page: `${page - 1}`,
            size: `${perPage}`,
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ json }) => {
            if (!json.hasOwnProperty("totalElements")) {
              throw new Error(
                "The numberOfElements property must be present in the Json response"
              );
            }
            return {
                data: json.content || [],
                total: parseInt(json.totalElements, 10),
            };
        });
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        let idStr = "";
        params.ids.map(id => idStr + `id=${id}`);
        return httpClient(`${apiUrl}/${resource}?${idStr}`).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        let sortingField = field;
        if (sortKeyMapper.has(field)) {
            sortingField = sortKeyMapper.get(field);
        }

        const query = {
            sort: `${sortingField},${order}`,
            page: `${page - 1}`,
            size: `${perPage}`,
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ json }) => {
            if (!json.hasOwnProperty("totalElements")) {
              throw new Error(
                "The numberOfElements property must be present in the Json response"
              );
            }
            return {
                data: json.content || [],
                total: parseInt(json.totalElements, 10),
            };
        });
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),
});
