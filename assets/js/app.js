const showPopupOnHeader = () => {
  var e = document.querySelector('.nav-top__item.link-pop-up');
  var q = document.querySelector('.appqr-floatbox');
  e.addEventListener('mouseover', () => q.classList.add('show'));
  e.addEventListener('mouseout', () => q.classList.remove('show'));

  var g = document.querySelector('.nav-topright__languages.nav-top__item');
  var h = document.querySelector('.nav-topright__languages--floatbox');
  g.addEventListener('mouseover', () => h.classList.add('show'));
  g.addEventListener('mouseout', () => h.classList.remove('show'));

  var n = document.querySelector('.nav-topright__noti.link-pop-up');
  var p = document.querySelector('.notification-floatbox');
  n.addEventListener('mouseover', () => p.classList.add('show'));
  n.addEventListener('mouseout', () => p.classList.remove('show'));
}
(showPopupOnHeader)();

(() => {
  const l = document.querySelector('.nav-topright__users-login');
  const r = document.querySelector('.nav-topright__users-register');

  const login_form = document.querySelector('#login-form');
  const register_form = document.querySelector('#register-form');
  const q1 = document.querySelector('#login-form .modal-auth-form');
  const b1 = document.querySelector('#login-form .btn-cancel');
  const q2 = document.querySelector('#register-form .modal-auth-form');
  const b2 = document.querySelector('#register-form .btn-cancel');

  const showModal = (linkName = 'login') => {
    console.log(linkName);
    if (linkName == 'login') {
      login_form.classList.add('show');
    } else {
      register_form.classList.add('show');
    }
  };
  const hideModal = (linkName = 'login') => {
    console.log(linkName)
    if (linkName == 'login') {
      login_form.classList.add('hide');
      setTimeout(() => {
        login_form.classList.remove('show');
        login_form.classList.remove('hide');
      }, 400);
    } else {
      register_form.classList.add('hide');
      setTimeout(() => {
        register_form.classList.remove('show');
        register_form.classList.remove('hide');
      }, 400);
    }
  };

  l.addEventListener('click', () => showModal());
  r.addEventListener('click', () => showModal('register'));
  login_form.addEventListener('click', () => hideModal());
  register_form.addEventListener('click', () => hideModal('register'));
  q1.addEventListener('click', (event) => event.stopPropagation());
  q2.addEventListener('click', (event) => event.stopPropagation());
  b1.addEventListener('mousedown', () => hideModal());
  b2.addEventListener('mousedown', () => hideModal('register'));

  const search_bar = document.querySelector('.search-bar-main');
  const search_box = document.querySelector('.searchbox-popover');
  search_bar.addEventListener('focus', () => {
    search_box.classList.add('show');
  });
  search_bar.addEventListener('focusout', () => {
    search_box.classList.remove('show');
  });

})();
