MACOCASION V9 (Minimal + Admin REAL)

Qué cambia respecto a tu v8:
- Ya NO hay products.js ni un "admin" que guarda en el navegador.
- Ahora los datos viven en:
  - data/config.json (WhatsApp)
  - data/products.json (catálogo)
- La web lee esos JSON (js/store.js).
- Para editarlo con formulario usamos Decap CMS en /admin.

PASOS EN NETLIFY (1 vez):
1) Sube esta carpeta al repo (GitHub) o arrástrala a Netlify.
2) En Netlify:
   - Site settings -> Identity -> Enable
   - Identity -> Git Gateway -> Enable
   - Invite users -> invita tu email
3) Entra a:
   https://TU-DOMINIO/admin/
   (inicias sesión) y ya puedes:
   - Cambiar número de WhatsApp
   - Añadir/editar productos
   - Subir varias fotos por producto

NOTA IMPORTANTE (IDs):
- El campo "ID" debe ser único. Recomendación:
  pro-2017-a1706 / air-2020-a2179 / imac-2019-a2115 ...

CARPETAS:
- img/products/ -> aquí se guardan las fotos que subas desde el panel.

Si algo no carga:
- Asegúrate de que data/products.json tiene la clave "products".
