// ── CURSOR ──
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .skill-cell, .project-row').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

// ── PAGE SWITCHING ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) page.classList.add('active');
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ── CONTACT FORM ──
function submitForm() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
  }

  document.getElementById('fname').value  = '';
  document.getElementById('femail').value = '';
  document.getElementById('fmsg').value   = '';

  const successEl = document.getElementById('form-success');
  successEl.style.display = 'block';
  setTimeout(() => successEl.style.display = 'none', 4500);
}

// ── MARQUEE duplicate text for seamless scroll ──
window.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.marquee-inner');
  if (inner) {
    inner.innerHTML += inner.innerHTML;
  }
});
