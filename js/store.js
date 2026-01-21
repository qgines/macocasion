// Macocasion - store loader (static + CMS-friendly)
// Carga datos desde /data/config.json y /data/products.json

async function loadJSON(path, fallback) {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn(`No se pudo cargar ${path}`, e);
    return fallback;
  }
}

function waLink(waNumber, msg) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
}

async function loadStore() {
  const config = await loadJSON("./data/config.json", { wa_number: "34XXXXXXXXX" });
  const productsFile = await loadJSON("./data/products.json", { products: [] });
  const products = Array.isArray(productsFile) ? productsFile : ((productsFile && productsFile.products) || []);

  const norm = (Array.isArray(products) ? products : []).map(p => ({
    id: String(p.id || ""),
    tipo: p.tipo || "",
    title: p.title || "",
    year: Number(p.year || 0) || 0,
    estado: p.estado || "",
    price: Number(p.price || 0) || 0,
    batteryCycles: Number(p.batteryCycles || 0) || 0,
    ref: p.ref || "",
    shortDesc: p.shortDesc || "",
    images: Array.isArray(p.images) ? p.images.filter(Boolean) : [],
    waMsg: p.waMsg || ""
  }));

  return { config, products: norm, waLink };
}

window.MCO_STORE = { loadStore, waLink };
