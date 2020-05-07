import { TranslationMessages } from 'ra-core';

const spanishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Añadir filtro',
            add: 'Añadir',
            back: 'Ir atrás',
            bulk_actions: '1 item seleccionado |||| %{smart_count} items seleccionados',
            cancel: 'Cancelar',
            clear_input_value: 'Limpiar campo',
            clone: 'Clonar',
            confirm: 'Confirmar',
            create: 'Crear',
            delete: 'Eliminar',
            edit: 'Editar',
            expand: "Expandir",
            export: 'Exportar',
            list: 'Listar',
            refresh: 'Refrescar',
            remove_filter: 'Quitar este filtro',
            remove: 'Borrar',
            save: 'Guardar',
            search: 'Buscar',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Deshacer',
            close: 'Cerrar',
            open_menu: 'Abrir menú',
            close_menu: 'Cerrar menú',
        },
        boolean: {
            true: 'Sí',
            false: 'No',
            null: '',
        },
        page: {
            create: 'Crear %{name}',
            dashboard: 'Tablero',
            edit: '%{name} #%{id}',
            error: 'Algo salió mal',
            list: 'Lista de %{name}',
            loading: 'Cargando',
            not_found: 'No encontrado',
            show: '%{name} #%{id}',
            empty: 'Sin %{name} todavía.',
            invite: '¿Quiere agregar una?',
        },
        input: {
            file: {
                upload_several:
                    'Arrastre algunos archivos para subir o haga clic para seleccionarlos.',
                upload_single: 'Arrastre un archivo para subir o haga clic para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Arrastre algunas imagénes para subir o haga clic para seleccionarlas.',
                upload_single:
                    'Arrastre alguna imagen para subir o haga clic para seleccionarla.',
            },
            references: {
                all_missing: 'No se pueden encontrar datos de referencias.',
                many_missing:
                    'Al menos una de las referencias asociadas no está disponible.',
                single_missing:
                    'Al parecer la referencia asociada no está disponible.',
            },
            password: {
                toggle_visible: 'Ocultar contraseña',
                toggle_hidden: 'Mostrar contraseña',
            },
        },
        message: {
            about: 'Acerca de',
            are_you_sure: '¿Está segura?',
            bulk_delete_content:
                '¿Está segura de que quiere eliminar este %{name}? |||| ¿Está segura de que quiere eliminar estos %{smart_count} items?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name} items',
            delete_content: '¿Está segura de que quiere eliminar este item?',
            delete_title: 'Eliminar %{name} #%{id}',
            details: 'Detalles',
            error:
                "Se produjo un error en el cliente y su solicitud no se pudo completar",
            invalid_form: 'El formulario no es válido. Por favor verifique si hay errores',
            loading: 'La página se está cargando, espere un momento por favor',
            no: 'No',
            not_found:
                'O bien escribió una URL incorrecta o siguió un enlace inválido.',
            yes: 'Sí',
            unsaved_changes:
                "Algunos de sus cambios no se guardaron. ¿Desea ignorarlos?",
        },
        navigation: {
            no_results: 'No se encontraron resultados',
            no_more_results:
                'El número de página %{page} está fuera de los límites. Pruebe la página anterior.',
            page_out_of_boundaries: 'Número de página %{page} fuera de los límites',
            page_out_from_end: 'No puede ir después de la última página',
            page_out_from_begin: 'No puede ir antes de la página 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            page_rows_per_page: 'Filas por página:',
            next: 'Siguiente',
            prev: 'Anterior',
        },
        auth: {
            auth_check_error: 'Por favor, inicie sesión para continuar',
            user_menu: 'Perfil',
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Acceder',
            sign_in_error: 'La autenticación falló, por favor, vuelva a intentarlo',
            logout: 'Cerrar Sesión',
        },
        notification: {
            updated: 'Element updated |||| %{smart_count} elements updated',
            created: 'Elemento creado',
            deleted: 'Elemento borrado |||| %{smart_count} elementos borrados.',
            bad_item: 'Elemento incorrecto',
            item_doesnt_exist: 'El elemento no existe',
            http_error: 'Error de comunicación con el servidor',
            data_provider_error:
                'Error del proveedor de datos. Consulte la consola para más detalles.',
            i18n_error:
                'No se pudieron cargar las traducciones para el idioma especificado',
            canceled: 'Acción cancelada',
            logged_out: 'Su sesión ha finalizado. Vuelva a iniciar sesión.',
        },
        validation: {
            required: 'Requerido',
            minLength: 'Debe contener al menos %{min} caracteres',
            maxLength: 'Debe contener %{max} caracteres o menos',
            minValue: 'Debe ser al menos %{min}',
            maxValue: 'Debe ser %{max} o menos',
            number: 'Debe ser un número',
            email: 'Debe ser un correo electrónico válido',
            oneOf: 'Debe ser uno de: %{options}',
            regex: 'Debe coincidir con un formato específico (regexp): %{pattern}',
        },
    },
    resources: {
      animals: {
        name: 'Animal |||| Animales',
        fields: {
                registrationDate: 'Fecha de registro',
                id: 'Identificador único',
                clinicalRecord: 'Historia clínica',
                name: 'Nombre',
                species: 'Especie',
                sex: 'Sexo',
                state: {
                  name: 'Estado'
                }
            },
      }
    },
    dashboard: {
      title: 'Portal de administración',
      card: {
        content: 'Lorem ipsum sic dolor amet (en español)...',
      },
    },
};

export default spanishMessages;
