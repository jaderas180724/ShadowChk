window.onload = () => loadPage('home');

async function loadPage(page) {
  const main = document.getElementById('main-content');
  try {
    const res = await fetch(`/${page}.html`);
    if (res.ok) {
      main.innerHTML = await res.text();
    } else {
      main.innerHTML = `<div class="text-center">Página ${page} no disponible</div>`;
    }
  } catch (e) {
    main.innerHTML = `<div class="text-center text-red-500">Error de carga</div>`;
  }

  // Actualiza activo en nav
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('text-accent', 'active'));
  event?.currentTarget?.classList.add('text-accent');
}