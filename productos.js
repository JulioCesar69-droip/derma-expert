const productosISDIN = [
  {
    nombre: "ISDINCEUTICS MELACLEAR ADVANCE 30ML",
    descripcion: "Sérum despigmentante intensivo que ayuda a unificar el tono de la piel.",
    precio: 197.4,
    imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8djlNqLLZ-GIiEKQjZtD0ex34xBnjWOWG4Udl9LtZgo3CCTwsusMatymZ_SyQjf6iSqUEBCwJAy67mEX7jdYcPNyGt5v7RqBmWT5yxMjUTTMDUupIvVIDmMc_MmQWfz4piKXTNJfsXUQ&usqp=CAc"
  },
  {
    nombre: "FOTOPROTECTOR ISDIN FUSION WATER MAGIC",
    descripcion: "Protector solar facial de textura ligera y absorción inmediata.",
    precio: 93.90,
    imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNR9orOH4wujSx7iGKkfM4HhiQv63tONSX__U_cjSeXc2IbbS4XCIiMsysoS5Repqu4WMFhfOl3XqSgAaQ4AckKt_s56CtnH2ZEUVNQ8rRPFd32PK7_o_tnXtxQT25zzrxuOIharQ&usqp=CAc"
  },
  {
    nombre: "FUSION WATER MAGIC LIGHT SPF 50 50 ML",
    descripcion: "Protección solar con tono claro para pieles sensibles. SPF 50.",
    precio: 103.00,
    imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRobMvVdb-u5sFHUnpSbqlm2c_ZVqgf2T6xJQSXkakhL2P7BMibe9YB2eSvzvprISgHTLulbHXjiea8PHsgvMDilmDvQv7_Cij3HUZo6g4tmzzYIzm4B-eOjHzFSemlmi5Jx5b9_6uD&usqp=CAc"
  },
  {
    nombre: "FUSION WATER MAGIC MEDIUM SPF 50 50 ML",
    descripcion: "Protección solar con tono medio, ideal para uso diario. SPF 50.",
    precio: 103.00,
    imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcReJFqkmbWrbdQIsBafyOxY8kCwUgr1yS7rvZOCA4YlXyUJ5EuYZgRUYqT5HftWySuokDjnc6jIM9oGeueB-TXHr7Ox1eqinkmJZDOAcM_e-gNRf9x-WwTK69Nn7vu7Iadbth_d3Hf6&usqp=CAc"
  },
  {
    nombre: "ACNIBEN RX REPAIR RENOVAR LABIAL 10gr",
    descripcion: "Bálsamo reparador labial para labios secos o agrietados por tratamientos dermatológicos.",
    precio: 57.90,
    imagen: "https://www.farmaciaslider.pe/my-assets/image/gallery/aa7930ed6cf87f27a47db46b5a40e2ff.jpg"
  },
  {
    nombre: "LIMPIADOR ISDIN ACNIBEN MATIFICANTE 200ML",
    descripcion: "Gel limpiador facial con acción matificante ideal para piel grasa o con tendencia acneica.",
    precio: 74.80,
    imagen: "https://farmaciabarahona.es/4160-large_default/isdin-teen-skin-acniben-limpiador-matificante-gel-200-ml.jpg"
  },
  {
    nombre: "TEEN SKIN ACNIBEN BODY 150ml",
    descripcion: "Spray corporal para el cuidado de la piel con tendencia acneica en espalda, pecho y hombros.",
    precio: 84.90,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKw7REY7kFjejRnanRgnxu1l9Jmtl_2pEXg&s"
  },
  {
    nombre: "TEEN SKIN ACNIBEN MASCARILLA FACIAL PURIFICANTE 75ML",
    descripcion: "Mascarilla purificante que ayuda a eliminar impurezas y controlar el exceso de sebo.",
    precio: 79.90,
    imagen: "https://www.farmacialeloir.com.ar/img/articulos/2023/07/acniben_teen_skin_mascarilla_facial_purificante_imagen1.jpg"
  },
  {
    nombre: "TEEN SKIN ACNIBEN NIGHT CONCENTRATE ANTI-IMPERFECCIONES 27ML",
    descripcion: "Concentrado facial nocturno que combate las imperfecciones y mejora la textura de la piel.",
    precio: 104.90,
    imagen: "https://statics.promofarma.com/static/promofarma/prod/product_images/mpdp/L7WCLP2W_es_ES_8.jpeg"
  },
  {
    nombre: "ACNIBEN EXFOLIANT 100ML",
    descripcion: "Gel exfoliante para una limpieza profunda que ayuda a renovar la piel y prevenir imperfecciones.",
    precio: 79.90,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs69JHlzk9kyYSIo4WOT04kxduKa1fwUKc0g&s"
  }
];

const productosBIODERMA = [
  {
    nombre: "SEBIUM SERUM",
    descripcion: "Sérum exfoliante suave para piel grasa con imperfecciones persistentes.",
    precio: 144.90,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf02x2bfEdzlZb7OXjztuQ1-BhJ3cbj0O6Sg&s"
  },
  {
    nombre: "PHOTODERM DRY TOUCH SUN ACTIVE DEFENSE",
    descripcion: "Protector solar toque seco, ideal para piel mixta o grasa. Alta protección.",
    precio: 109.50,
    imagen: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/073957L.jpg"
  },
  {
    nombre: "SEBIUM GEL MOUSSANT 200ML",
    descripcion: "Gel limpiador purificante para piel mixta a grasa.",
    precio: 95.4,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYgDkxdlDoDoJY2dasEM9gZMHgAIv8pBHIA&s"
  },
  {
    nombre: "SEBIUM GEL MOUSSANT ACTIF 200ML",
    descripcion: "Gel limpiador activo con acción purificante intensiva.",
    precio: 96.90,
    imagen: "https://static.beautytocare.com/media/catalog/product/b/i/bioderma-sebium-gel-moussant-actif-cleansing-active-foaming-gel-200ml.jpg"
  },
  {
    nombre: "SEBIUM GEL GOMMANT 100ML",
    descripcion: "Exfoliante facial para piel grasa, elimina impurezas y células muertas.",
    precio: 77.90,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2A6wc6sHE5J7pYmPZpiY2eOWNMI_orfXSQ&s"
  },
  {
    nombre: "SEBIUM HYDRA 40ML",
    descripcion: "Hidratante calmante para piel grasa debilitada por tratamientos dermatológicos.",
    precio: 85.40,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAuD8JzWrzeYLyG7lB-5fd2MX2tq69fI_yg&s"
  },
  {
    nombre: "SEBIUM MAT CONTROL 30 ML",
    descripcion: "Controla el brillo, hidrata y matifica la piel durante 8 horas.",
    precio: 96.90,
    imagen: "https://dermashop.pe/cdn/shop/files/0-MatControl_grande.jpg?v=1727299404"
  },
  {
    nombre: "SEBIUM KERATO+",
    descripcion: "Tratamiento intensivo para imperfecciones persistentes, reduce marcas.",
    precio: 104.30,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2TAW9nMKIth0WLqsejaCACLKOglg0cIDlg&s"
  },
  {
    nombre: "SENSIBIO DEFENSIVE SERUM 40ML",
    descripcion: "Fortalece la piel sensible y la protege del estrés oxidativo diario.",
    precio: 175.20,
    imagen: "https://wongfood.vtexassets.com/arquivos/ids/629994/S-rum-Bioderma-Sensibio-Defensive-30ml-1-351648223.jpg?v=638181494482430000"
  },
  {
    nombre: "SENSIBIO GEL MOUSSANT 200 ML",
    descripcion: "Gel limpiador suave, ideal para piel sensible e intolerante.",
    precio: 96.90,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAlXZiYwarwCbwaZiRkjgDhv12THIsiI8wg&s"
  }
];
