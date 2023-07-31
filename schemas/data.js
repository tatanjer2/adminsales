export default {
    name: 'data',
    title: 'Ordenes de Compra',
    type: 'document',
    fields: [
      
      {
        name: 'name',
        title: 'Nombre',
        type: 'string',
      },
      {
        name: 'lastname',
        title: 'Apellido',
        type: 'string',
      },
      {
        name: 'cant',
        title: 'Cantidad',
        type: 'string',
      },
      {
        name: 'mail',
        title: 'Correo',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'mail',
          maxLength: 90,
        }
      },
      {
        name: 'phone',
        title: 'Telefono',
        type: 'string',
      },
      {
        name: 'adress',
        title: 'Direccion',
        type: 'string',
      },
      {
        name: 'adress2',
        title: 'Direccion Alternativa',
        type: 'string',
      },
      {
        name: 'depart',
        title: 'Departamento',
        type: 'string',
      },
      {
        name: 'city',
        title: 'Cuidad',
        type: 'string',
      }
      
    ],
};