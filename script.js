// ===== Обратный отсчёт =====
const weddingDate = new Date('2027-02-27T14:15:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff < 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="font-family:Comic Neue;font-size:1.5rem;">Этот день настал! 🎉</p>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== RSVP через Formspree (AJAX) =====
const form = document.getElementById('rsvpForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const btn = form.querySelector('button');
  btn.textContent = 'Отправка...';
  btn.disabled = true;
  msg.textContent = '';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      msg.textContent = 'Спасибо! Ваш ответ отправлен. 💙';
      msg.style.color = '#2e7d32';
      form.reset();
    } else {
      throw new Error('Ошибка отправки');
    }
  } catch (err) {
    msg.textContent = 'Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.';
    msg.style.color = '#c62828';
  } finally {
    btn.textContent = 'Отправить';
    btn.disabled = false;
  }
});
