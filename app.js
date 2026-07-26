/* ===================================================================
   NiiDalo HMS — Hospital Management System
   Complete application logic: Auth, Routing, CRUD, Views, Billing
   =================================================================== */

// ===== SVG ICON LIBRARY =====
const ICONS = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  doctor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  bill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',
  pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 1.5l-8 8a5 5 0 007 7l8-8a5 5 0 00-7-7z"/><path d="M6.5 10.5L14 3"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  printer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/><path d="M12 7v5l4 2"/></svg>',
  success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>',
  warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>',
};

// ===== SEED DATA =====
function seedData() {
  if (localStorage.getItem('hms_seeded')) return;

  const departments = [
    { id: 'dep1', name: 'Cardiology', description: 'Heart and cardiovascular system' },
    { id: 'dep2', name: 'Neurology', description: 'Brain and nervous system' },
    { id: 'dep3', name: 'Orthopedics', description: 'Bones, joints, and muscles' },
    { id: 'dep4', name: 'Pediatrics', description: 'Children health care' },
    { id: 'dep5', name: 'Dermatology', description: 'Skin conditions and treatments' },
    { id: 'dep6', name: 'General Medicine', description: 'General health and wellness' },
  ];

  const users = [
    { id: 'u1', username: 'admin', password: 'admin123', role: 'admin', name: 'System Admin', email: 'admin@niidalo.com', phone: '555-0100' },
    { id: 'u2', username: 'dr.smith', password: 'doctor123', role: 'doctor', name: 'Dr. Sarah Smith', email: 'smith@niidalo.com', phone: '555-0201', specialization: 'Cardiology', departmentId: 'dep1', fee: 150, schedule: { Mon: ['09:00','10:00','11:00','14:00','15:00'], Tue: ['09:00','10:00','11:00','14:00'], Wed: ['09:00','10:00','11:00'], Thu: ['09:00','10:00','14:00','15:00','16:00'], Fri: ['09:00','10:00','11:00','14:00'] } },
    { id: 'u3', username: 'dr.jones', password: 'doctor123', role: 'doctor', name: 'Dr. Michael Jones', email: 'jones@niidalo.com', phone: '555-0202', specialization: 'Neurology', departmentId: 'dep2', fee: 175, schedule: { Mon: ['10:00','11:00','14:00','15:00'], Tue: ['09:00','10:00','11:00','14:00','15:00'], Wed: ['10:00','11:00','14:00'], Thu: ['09:00','10:00','11:00'], Fri: ['10:00','11:00','14:00','15:00'] } },
    { id: 'u4', username: 'dr.patel', password: 'doctor123', role: 'doctor', name: 'Dr. Anika Patel', email: 'patel@niidalo.com', phone: '555-0203', specialization: 'Pediatrics', departmentId: 'dep4', fee: 120, schedule: { Mon: ['09:00','10:00','11:00'], Tue: ['09:00','10:00','11:00','14:00'], Wed: ['09:00','10:00','11:00','14:00','15:00'], Thu: ['10:00','11:00','14:00'], Fri: ['09:00','10:00','11:00'] } },
    { id: 'u5', username: 'dr.garcia', password: 'doctor123', role: 'doctor', name: 'Dr. Carlos Garcia', email: 'garcia@niidalo.com', phone: '555-0204', specialization: 'Orthopedics', departmentId: 'dep3', fee: 160, schedule: { Mon: ['09:00','10:00','14:00','15:00'], Tue: ['10:00','11:00','14:00','15:00','16:00'], Wed: ['09:00','10:00','11:00'], Thu: ['09:00','10:00','14:00','15:00'], Fri: ['10:00','11:00','14:00'] } },
    { id: 'u6', username: 'john.doe', password: 'patient123', role: 'patient', name: 'John Doe', email: 'john@email.com', phone: '555-0301', age: 35, gender: 'Male', bloodGroup: 'O+', address: '123 Main St, Springfield' },
    { id: 'u7', username: 'jane.wilson', password: 'patient123', role: 'patient', name: 'Jane Wilson', email: 'jane@email.com', phone: '555-0302', age: 28, gender: 'Female', bloodGroup: 'A+', address: '456 Oak Ave, Riverside' },
    { id: 'u8', username: 'mike.brown', password: 'patient123', role: 'patient', name: 'Mike Brown', email: 'mike@email.com', phone: '555-0303', age: 52, gender: 'Male', bloodGroup: 'B+', address: '789 Pine Rd, Lakewood' },
    { id: 'u9', username: 'emily.chen', password: 'patient123', role: 'patient', name: 'Emily Chen', email: 'emily@email.com', phone: '555-0304', age: 41, gender: 'Female', bloodGroup: 'AB-', address: '321 Elm St, Brookside' },
  ];

  const today = new Date();
  const fmt = d => d.toISOString().split('T')[0];
  const past1 = new Date(today); past1.setDate(past1.getDate() - 5);
  const past2 = new Date(today); past2.setDate(past2.getDate() - 12);
  const past3 = new Date(today); past3.setDate(past3.getDate() - 3);
  const future1 = new Date(today); future1.setDate(future1.getDate() + 2);
  const future2 = new Date(today); future2.setDate(future2.getDate() + 5);

  const appointments = [
    { id: 'apt1', patientId: 'u6', doctorId: 'u2', date: fmt(past1), time: '10:00', status: 'completed', reason: 'Chest pain evaluation', notes: 'ECG normal, stress test recommended' },
    { id: 'apt2', patientId: 'u7', doctorId: 'u3', date: fmt(past2), time: '11:00', status: 'completed', reason: 'Chronic headaches', notes: 'MRI clear, migraine medication prescribed' },
    { id: 'apt3', patientId: 'u8', doctorId: 'u5', date: fmt(past3), time: '14:00', status: 'completed', reason: 'Knee pain', notes: 'X-ray shows minor wear, physical therapy recommended' },
    { id: 'apt4', patientId: 'u6', doctorId: 'u4', date: fmt(future1), time: '09:00', status: 'scheduled', reason: 'Annual checkup for child', notes: '' },
    { id: 'apt5', patientId: 'u9', doctorId: 'u2', date: fmt(future2), time: '15:00', status: 'scheduled', reason: 'Follow-up heart consultation', notes: '' },
    { id: 'apt6', patientId: 'u7', doctorId: 'u5', date: fmt(future1), time: '11:00', status: 'scheduled', reason: 'Shoulder pain', notes: '' },
  ];

  const prescriptions = [
    { id: 'prx1', appointmentId: 'apt1', patientId: 'u6', doctorId: 'u2', date: fmt(past1), medications: [{ name: 'Aspirin', dosage: '75mg', frequency: 'Once daily', duration: '30 days' }, { name: 'Atorvastatin', dosage: '10mg', frequency: 'At bedtime', duration: '30 days' }], notes: 'Follow up in 1 month. Avoid heavy exercise.' },
    { id: 'prx2', appointmentId: 'apt2', patientId: 'u7', doctorId: 'u3', date: fmt(past2), medications: [{ name: 'Sumatriptan', dosage: '50mg', frequency: 'As needed', duration: '15 days' }, { name: 'Propranolol', dosage: '20mg', frequency: 'Twice daily', duration: '30 days' }], notes: 'Avoid triggers: bright lights, stress. Keep headache diary.' },
    { id: 'prx3', appointmentId: 'apt3', patientId: 'u8', doctorId: 'u5', date: fmt(past3), medications: [{ name: 'Ibuprofen', dosage: '400mg', frequency: 'Three times daily', duration: '10 days' }, { name: 'Glucosamine', dosage: '500mg', frequency: 'Twice daily', duration: '60 days' }], notes: 'Start physical therapy next week. Ice the knee after activity.' },
  ];

  const bills = [
    { id: 'bill1', appointmentId: 'apt1', patientId: 'u6', doctorId: 'u2', date: fmt(past1), items: [{ description: 'Consultation — Cardiology', amount: 150 }, { description: 'ECG Test', amount: 75 }, { description: 'Blood Panel', amount: 120 }], total: 345, status: 'paid', paymentDate: fmt(past1) },
    { id: 'bill2', appointmentId: 'apt2', patientId: 'u7', doctorId: 'u3', date: fmt(past2), items: [{ description: 'Consultation — Neurology', amount: 175 }, { description: 'MRI Scan', amount: 450 }], total: 625, status: 'paid', paymentDate: fmt(new Date(past2.getTime() + 86400000 * 2)) },
    { id: 'bill3', appointmentId: 'apt3', patientId: 'u8', doctorId: 'u5', date: fmt(past3), items: [{ description: 'Consultation — Orthopedics', amount: 160 }, { description: 'X-Ray', amount: 95 }, { description: 'Knee Brace', amount: 45 }], total: 300, status: 'pending', paymentDate: null },
  ];

  save('departments', departments);
  save('users', users);
  save('appointments', appointments);
  save('prescriptions', prescriptions);
  save('bills', bills);
  localStorage.setItem('hms_seeded', '1');
}

// ===== DATA HELPERS =====
function save(key, data) { localStorage.setItem('hms_' + key, JSON.stringify(data)); }
function load(key) { try { return JSON.parse(localStorage.getItem('hms_' + key)) || []; } catch { return []; } }
function genId() { return 'id_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7); }

function getUser(id) { return load('users').find(u => u.id === id); }
function getDoctors() { return load('users').filter(u => u.role === 'doctor'); }
function getPatients() { return load('users').filter(u => u.role === 'patient'); }

// ===== AUTH =====
function login(username, password, role) {
  const users = load('users');
  const user = users.find(u => u.username === username && u.password === password && u.role === role);
  if (user) {
    sessionStorage.setItem('hms_session', JSON.stringify({ id: user.id, role: user.role }));
    return user;
  }
  return null;
}

function logout() {
  sessionStorage.removeItem('hms_session');
  location.reload();
}

function currentUser() {
  try {
    const sess = JSON.parse(sessionStorage.getItem('hms_session'));
    if (sess) return getUser(sess.id);
  } catch {}
  return null;
}

// ===== UI HELPERS =====
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function showToast(title, msg, type = 'info') {
  const container = $('#toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<div class="toast-icon">${ICONS[type] || ICONS.info}</div><div class="toast-msg"><strong>${title}</strong>${msg}</div>`;
  container.appendChild(t);
  setTimeout(() => { t.classList.add('removing'); setTimeout(() => t.remove(), 300); }, 3500);
}

function showModal(title, bodyHTML, footerHTML = '') {
  $('#modalTitle').textContent = title;
  $('#modalBody').innerHTML = bodyHTML;
  $('#modalFooter').innerHTML = footerHTML;
  $('#modalOverlay').classList.add('show');
}

function hideModal() { $('#modalOverlay').classList.remove('show'); }

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatCurrency(n) { return '$' + Number(n).toFixed(2); }

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function statusBadge(status) {
  const map = {
    scheduled: 'badge badge-info badge-dot',
    completed: 'badge badge-success badge-dot',
    cancelled: 'badge badge-error badge-dot',
    paid: 'badge badge-success badge-dot',
    pending: 'badge badge-warning badge-dot',
    overdue: 'badge badge-error badge-dot',
  };
  return `<span class="${map[status] || 'badge badge-info'}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;
}

// ===== NAVIGATION =====
const NAV = {
  admin: [
    { section: 'Main', items: [
      { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
      { id: 'doctors', icon: 'doctor', label: 'Manage Doctors' },
      { id: 'patients', icon: 'users', label: 'Manage Patients' },
      { id: 'appointments', icon: 'calendar', label: 'All Appointments' },
      { id: 'billing', icon: 'dollar', label: 'Billing & Revenue' },
      { id: 'departments', icon: 'building', label: 'Departments' },
    ]},
  ],
  doctor: [
    { section: 'Main', items: [
      { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
      { id: 'my-appointments', icon: 'calendar', label: 'My Appointments' },
      { id: 'my-patients', icon: 'users', label: 'My Patients' },
      { id: 'prescriptions', icon: 'pill', label: 'Prescriptions' },
      { id: 'schedule', icon: 'clock', label: 'My Schedule' },
    ]},
  ],
  patient: [
    { section: 'Main', items: [
      { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
      { id: 'book-appointment', icon: 'plus', label: 'Book Appointment' },
      { id: 'my-appointments', icon: 'calendar', label: 'My Appointments' },
      { id: 'my-bills', icon: 'bill', label: 'My Bills' },
      { id: 'medical-history', icon: 'history', label: 'Medical History' },
      { id: 'profile', icon: 'user', label: 'My Profile' },
    ]},
  ],
};

let currentView = 'dashboard';

function renderSidebar(user) {
  const nav = NAV[user.role] || [];
  const el = $('#sidebarNav');
  el.innerHTML = nav.map(section => `
    <div class="nav-section">
      <div class="nav-section-title">${section.section}</div>
      ${section.items.map(item => `
        <div class="nav-item${item.id === currentView ? ' active' : ''}" data-view="${item.id}">
          ${ICONS[item.icon] || ''}
          <span>${item.label}</span>
          ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');

  // User info
  const avatarClass = user.role === 'admin' ? 'avatar-admin' : user.role === 'doctor' ? 'avatar-doctor' : 'avatar-patient';
  $('#userAvatar').className = `user-avatar ${avatarClass}`;
  $('#userAvatar').textContent = initials(user.name);
  $('#userName').textContent = user.name;
  $('#userRole').textContent = user.role;

  // Nav click
  el.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.view));
  });
}

function navigate(view) {
  currentView = view;
  const user = currentUser();
  renderSidebar(user);
  renderView(user, view);
  // Close mobile sidebar
  $('#sidebar').classList.remove('open');
}

function renderView(user, view) {
  const area = $('#contentArea');
  area.style.animation = 'none';
  area.offsetHeight; // trigger reflow
  area.style.animation = '';

  const role = user.role;

  if (role === 'admin') {
    switch(view) {
      case 'dashboard': renderAdminDashboard(); break;
      case 'doctors': renderManageDoctors(); break;
      case 'patients': renderManagePatients(); break;
      case 'appointments': renderAllAppointments(); break;
      case 'billing': renderBilling(); break;
      case 'departments': renderDepartments(); break;
      default: renderAdminDashboard();
    }
  } else if (role === 'doctor') {
    switch(view) {
      case 'dashboard': renderDoctorDashboard(user); break;
      case 'my-appointments': renderDoctorAppointments(user); break;
      case 'my-patients': renderDoctorPatients(user); break;
      case 'prescriptions': renderDoctorPrescriptions(user); break;
      case 'schedule': renderDoctorSchedule(user); break;
      default: renderDoctorDashboard(user);
    }
  } else if (role === 'patient') {
    switch(view) {
      case 'dashboard': renderPatientDashboard(user); break;
      case 'book-appointment': renderBookAppointment(user); break;
      case 'my-appointments': renderPatientAppointments(user); break;
      case 'my-bills': renderPatientBills(user); break;
      case 'medical-history': renderMedicalHistory(user); break;
      case 'profile': renderPatientProfile(user); break;
      default: renderPatientDashboard(user);
    }
  }

  // Update page title
  const allItems = NAV[role]?.flatMap(s => s.items) || [];
  const item = allItems.find(i => i.id === view);
  $('#pageTitle').textContent = item ? item.label : 'Dashboard';

  // Apply motion primitives to new DOM elements
  setTimeout(() => {
    MotionPrimitives.reinit();
    
    // Animate stats
    document.querySelectorAll('.stat-info h3').forEach(el => {
      const val = el.textContent.trim();
      const isCurrency = val.startsWith('$');
      const numStr = val.replace(/[^0-9.]/g, '');
      if (numStr && !isNaN(parseFloat(numStr))) {
        MotionPrimitives.animateNumber(el, numStr, isCurrency);
      }
    });
  }, 50);
}

// ===== ADMIN VIEWS =====

function renderAdminDashboard() {
  const doctors = getDoctors();
  const patients = getPatients();
  const appointments = load('appointments');
  const bills = load('bills');
  const totalRevenue = bills.filter(b => b.status === 'paid').reduce((s, b) => s + b.total, 0);
  const pendingBills = bills.filter(b => b.status === 'pending').length;
  const todayStr = new Date().toISOString().split('T')[0];
  const todayApts = appointments.filter(a => a.date === todayStr);

  const content = `
    <div class="stats-grid">
      <div class="stat-card teal">
        <div class="stat-icon teal">${ICONS.users}</div>
        <div class="stat-info">
          <h3>${patients.length}</h3>
          <p>Total Patients</p>
        </div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon purple">${ICONS.doctor}</div>
        <div class="stat-info">
          <h3>${doctors.length}</h3>
          <p>Active Doctors</p>
        </div>
      </div>
      <div class="stat-card blue">
        <div class="stat-icon blue">${ICONS.calendar}</div>
        <div class="stat-info">
          <h3>${appointments.length}</h3>
          <p>Total Appointments</p>
          <span class="stat-change up">↑ ${todayApts.length} today</span>
        </div>
      </div>
      <div class="stat-card amber">
        <div class="stat-icon amber">${ICONS.dollar}</div>
        <div class="stat-info">
          <h3>${formatCurrency(totalRevenue)}</h3>
          <p>Total Revenue</p>
          <span class="stat-change ${pendingBills > 0 ? 'down' : 'up'}">${pendingBills} pending</span>
        </div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
      <div class="section-card">
        <div class="section-header">
          <h2>Recent Appointments</h2>
          <button class="btn btn-sm btn-secondary" onclick="navigate('appointments')">View All</button>
        </div>
        <div class="section-body no-pad">
          <table class="data-table">
            <thead><tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>
              ${appointments.slice(-5).reverse().map(a => {
                const p = getUser(a.patientId);
                const d = getUser(a.doctorId);
                return `<tr>
                  <td>${p ? p.name : 'Unknown'}</td>
                  <td>${d ? d.name : 'Unknown'}</td>
                  <td>${formatDate(a.date)}</td>
                  <td>${statusBadge(a.status)}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-card">
        <div class="section-header">
          <h2>Recent Bills</h2>
          <button class="btn btn-sm btn-secondary" onclick="navigate('billing')">View All</button>
        </div>
        <div class="section-body no-pad">
          <table class="data-table">
            <thead><tr><th>Patient</th><th>Amount</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>
              ${bills.slice(-5).reverse().map(b => {
                const p = getUser(b.patientId);
                return `<tr>
                  <td>${p ? p.name : 'Unknown'}</td>
                  <td style="font-weight:600;color:var(--text)">${formatCurrency(b.total)}</td>
                  <td>${formatDate(b.date)}</td>
                  <td>${statusBadge(b.status)}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function renderManageDoctors() {
  const doctors = getDoctors();
  const depts = load('departments');

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>Doctors <span class="subtitle">${doctors.length} total</span></h2>
        <button class="btn btn-primary btn-sm" onclick="showDoctorForm()">${ICONS.plus} Add Doctor</button>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Doctor</th><th>Specialization</th><th>Department</th><th>Fee</th><th>Contact</th><th>Actions</th></tr></thead>
          <tbody>
            ${doctors.map(d => {
              const dept = depts.find(dp => dp.id === d.departmentId);
              return `<tr>
                <td>
                  <div class="table-user">
                    <div class="table-avatar avatar-doctor">${initials(d.name)}</div>
                    <div class="table-user-info">
                      <div class="t-name">${d.name}</div>
                      <div class="t-sub">${d.username}</div>
                    </div>
                  </div>
                </td>
                <td>${d.specialization || '—'}</td>
                <td><span class="badge badge-purple">${dept ? dept.name : '—'}</span></td>
                <td style="font-weight:600;color:var(--accent)">${formatCurrency(d.fee || 0)}</td>
                <td>${d.email}<br><span style="color:var(--text-muted)">${d.phone}</span></td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon" onclick="showDoctorForm('${d.id}')" title="Edit">${ICONS.edit}</button>
                    <button class="btn-icon" onclick="deleteDoctor('${d.id}')" title="Delete">${ICONS.trash}</button>
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${doctors.length === 0 ? '<div class="table-empty"><p>No doctors registered yet.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function showDoctorForm(editId) {
  const depts = load('departments');
  const doc = editId ? getUser(editId) : null;
  const title = doc ? 'Edit Doctor' : 'Add New Doctor';

  const body = `
    <form id="doctorForm">
      <div class="form-row">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control" id="dfName" value="${doc ? doc.name : ''}" required>
        </div>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" id="dfUsername" value="${doc ? doc.username : ''}" required ${doc ? 'readonly' : ''}>
        </div>
      </div>
      ${!doc ? '<div class="form-group"><label>Password</label><input type="password" class="form-control" id="dfPassword" placeholder="Set password" required></div>' : ''}
      <div class="form-row">
        <div class="form-group">
          <label>Specialization</label>
          <input type="text" class="form-control" id="dfSpec" value="${doc ? doc.specialization || '' : ''}" required>
        </div>
        <div class="form-group">
          <label>Department</label>
          <select class="form-control" id="dfDept" required>
            <option value="">Select department</option>
            ${depts.map(d => `<option value="${d.id}" ${doc && doc.departmentId === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Consultation Fee ($)</label>
          <input type="number" class="form-control" id="dfFee" value="${doc ? doc.fee || '' : ''}" required>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" id="dfPhone" value="${doc ? doc.phone || '' : ''}">
        </div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" id="dfEmail" value="${doc ? doc.email || '' : ''}">
      </div>
    </form>
  `;

  const footer = `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveDoctor('${editId || ''}')">${ICONS.check} ${doc ? 'Update' : 'Add'} Doctor</button>
  `;

  showModal(title, body, footer);
}

window.showDoctorForm = showDoctorForm;

window.saveDoctor = function(editId) {
  const name = $('#dfName').value.trim();
  const username = $('#dfUsername').value.trim();
  const spec = $('#dfSpec').value.trim();
  const deptId = $('#dfDept').value;
  const fee = parseFloat($('#dfFee').value);
  const phone = $('#dfPhone').value.trim();
  const email = $('#dfEmail').value.trim();

  if (!name || !username || !spec || !deptId || isNaN(fee)) {
    showToast('Validation Error', 'Please fill in all required fields.', 'error');
    return;
  }

  const users = load('users');

  if (editId) {
    const idx = users.findIndex(u => u.id === editId);
    if (idx !== -1) {
      users[idx] = { ...users[idx], name, specialization: spec, departmentId: deptId, fee, phone, email };
      save('users', users);
      showToast('Doctor Updated', `${name} has been updated.`, 'success');
    }
  } else {
    const password = $('#dfPassword').value.trim();
    if (!password) { showToast('Error', 'Password is required.', 'error'); return; }
    if (users.find(u => u.username === username)) { showToast('Error', 'Username already exists.', 'error'); return; }
    const defaultSchedule = { Mon: ['09:00','10:00','11:00','14:00','15:00'], Tue: ['09:00','10:00','11:00','14:00'], Wed: ['09:00','10:00','11:00'], Thu: ['09:00','10:00','14:00','15:00'], Fri: ['09:00','10:00','11:00','14:00'] };
    users.push({ id: genId(), username, password, role: 'doctor', name, email, phone, specialization: spec, departmentId: deptId, fee, schedule: defaultSchedule });
    save('users', users);
    showToast('Doctor Added', `${name} has been added.`, 'success');
  }

  hideModal();
  navigate('doctors');
};

window.deleteDoctor = function(id) {
  const doc = getUser(id);
  showModal('Confirm Delete', `<p>Are you sure you want to remove <strong>${doc ? doc.name : 'this doctor'}</strong>? This action cannot be undone.</p>`,
    `<button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
     <button class="btn btn-danger" onclick="confirmDeleteDoctor('${id}')">${ICONS.trash} Delete</button>`
  );
};

window.confirmDeleteDoctor = function(id) {
  let users = load('users');
  users = users.filter(u => u.id !== id);
  save('users', users);
  hideModal();
  showToast('Deleted', 'Doctor has been removed.', 'success');
  navigate('doctors');
};

function renderManagePatients() {
  const patients = getPatients();

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>Patients <span class="subtitle">${patients.length} total</span></h2>
        <button class="btn btn-primary btn-sm" onclick="showPatientForm()">${ICONS.plus} Add Patient</button>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Patient</th><th>Age</th><th>Gender</th><th>Blood Group</th><th>Contact</th><th>Actions</th></tr></thead>
          <tbody>
            ${patients.map(p => `<tr>
              <td>
                <div class="table-user">
                  <div class="table-avatar avatar-patient">${initials(p.name)}</div>
                  <div class="table-user-info">
                    <div class="t-name">${p.name}</div>
                    <div class="t-sub">${p.username}</div>
                  </div>
                </div>
              </td>
              <td>${p.age || '—'}</td>
              <td>${p.gender || '—'}</td>
              <td><span class="badge badge-teal">${p.bloodGroup || '—'}</span></td>
              <td>${p.email}<br><span style="color:var(--text-muted)">${p.phone}</span></td>
              <td>
                <div class="table-actions">
                  <button class="btn-icon" onclick="showPatientForm('${p.id}')" title="Edit">${ICONS.edit}</button>
                  <button class="btn-icon" onclick="viewPatientHistory('${p.id}')" title="View History">${ICONS.eye}</button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
        ${patients.length === 0 ? '<div class="table-empty"><p>No patients registered yet.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.showPatientForm = function(editId) {
  const pat = editId ? getUser(editId) : null;
  const title = pat ? 'Edit Patient' : 'Add New Patient';

  const body = `
    <form id="patientForm">
      <div class="form-row">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control" id="pfName" value="${pat ? pat.name : ''}" required>
        </div>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" id="pfUsername" value="${pat ? pat.username : ''}" required ${pat ? 'readonly' : ''}>
        </div>
      </div>
      ${!pat ? '<div class="form-group"><label>Password</label><input type="password" class="form-control" id="pfPassword" placeholder="Set password" required></div>' : ''}
      <div class="form-row">
        <div class="form-group">
          <label>Age</label>
          <input type="number" class="form-control" id="pfAge" value="${pat ? pat.age || '' : ''}">
        </div>
        <div class="form-group">
          <label>Gender</label>
          <select class="form-control" id="pfGender">
            <option value="">Select</option>
            <option value="Male" ${pat && pat.gender === 'Male' ? 'selected' : ''}>Male</option>
            <option value="Female" ${pat && pat.gender === 'Female' ? 'selected' : ''}>Female</option>
            <option value="Other" ${pat && pat.gender === 'Other' ? 'selected' : ''}>Other</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Blood Group</label>
          <select class="form-control" id="pfBlood">
            <option value="">Select</option>
            ${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(bg => `<option value="${bg}" ${pat && pat.bloodGroup === bg ? 'selected' : ''}>${bg}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" id="pfPhone" value="${pat ? pat.phone || '' : ''}">
        </div>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" id="pfEmail" value="${pat ? pat.email || '' : ''}">
      </div>
      <div class="form-group">
        <label>Address</label>
        <textarea class="form-control" id="pfAddress">${pat ? pat.address || '' : ''}</textarea>
      </div>
    </form>
  `;

  const footer = `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="savePatient('${editId || ''}')">${ICONS.check} ${pat ? 'Update' : 'Add'} Patient</button>
  `;

  showModal(title, body, footer);
};

window.savePatient = function(editId) {
  const name = $('#pfName').value.trim();
  const username = $('#pfUsername').value.trim();
  const age = parseInt($('#pfAge').value) || null;
  const gender = $('#pfGender').value;
  const bloodGroup = $('#pfBlood').value;
  const phone = $('#pfPhone').value.trim();
  const email = $('#pfEmail').value.trim();
  const address = $('#pfAddress').value.trim();

  if (!name || !username) { showToast('Validation Error', 'Name and username are required.', 'error'); return; }

  const users = load('users');

  if (editId) {
    const idx = users.findIndex(u => u.id === editId);
    if (idx !== -1) {
      users[idx] = { ...users[idx], name, age, gender, bloodGroup, phone, email, address };
      save('users', users);
      showToast('Patient Updated', `${name} has been updated.`, 'success');
    }
  } else {
    const password = $('#pfPassword').value.trim();
    if (!password) { showToast('Error', 'Password is required.', 'error'); return; }
    if (users.find(u => u.username === username)) { showToast('Error', 'Username already exists.', 'error'); return; }
    users.push({ id: genId(), username, password, role: 'patient', name, email, phone, age, gender, bloodGroup, address });
    save('users', users);
    showToast('Patient Added', `${name} has been registered.`, 'success');
  }

  hideModal();
  navigate('patients');
};

window.viewPatientHistory = function(patientId) {
  const patient = getUser(patientId);
  const appointments = load('appointments').filter(a => a.patientId === patientId);
  const prescriptions = load('prescriptions').filter(p => p.patientId === patientId);
  const bills = load('bills').filter(b => b.patientId === patientId);

  const body = `
    <div style="margin-bottom:16px">
      <div class="table-user">
        <div class="table-avatar avatar-patient">${initials(patient.name)}</div>
        <div class="table-user-info">
          <div class="t-name">${patient.name}</div>
          <div class="t-sub">Age: ${patient.age || '—'} | Blood: ${patient.bloodGroup || '—'}</div>
        </div>
      </div>
    </div>
    <h4 style="margin:16px 0 8px;font-size:0.85rem;color:var(--text-secondary)">Appointments (${appointments.length})</h4>
    ${appointments.length ? appointments.map(a => {
      const doc = getUser(a.doctorId);
      return `<div style="padding:10px 0;border-bottom:1px solid var(--border);font-size:0.85rem">
        <strong>${formatDate(a.date)}</strong> at ${a.time} — ${doc ? doc.name : 'Unknown'} ${statusBadge(a.status)}
        <div style="color:var(--text-muted);margin-top:4px">${a.reason}</div>
      </div>`;
    }).join('') : '<p style="color:var(--text-muted);font-size:0.85rem">No appointments.</p>'}
    <h4 style="margin:16px 0 8px;font-size:0.85rem;color:var(--text-secondary)">Total Bills: ${formatCurrency(bills.reduce((s,b)=>s+b.total,0))}</h4>
  `;

  showModal(`Patient History — ${patient.name}`, body, '<button class="btn btn-secondary" onclick="hideModal()">Close</button>');
};

function renderAllAppointments() {
  const appointments = load('appointments');
  const sorted = [...appointments].sort((a, b) => b.date.localeCompare(a.date));

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>All Appointments <span class="subtitle">${appointments.length} total</span></h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${sorted.map(a => {
              const p = getUser(a.patientId);
              const d = getUser(a.doctorId);
              return `<tr>
                <td style="font-family:monospace;color:var(--text-muted)">#${a.id.slice(-5)}</td>
                <td>${p ? p.name : 'Unknown'}</td>
                <td>${d ? d.name : 'Unknown'}</td>
                <td>${formatDate(a.date)}</td>
                <td>${a.time}</td>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.reason}</td>
                <td>${statusBadge(a.status)}</td>
                <td>
                  <div class="table-actions">
                    ${a.status === 'scheduled' ? `
                      <button class="btn-icon" onclick="completeAppointment('${a.id}')" title="Mark Complete">${ICONS.check}</button>
                      <button class="btn-icon" onclick="cancelAppointment('${a.id}')" title="Cancel">${ICONS.x}</button>
                    ` : ''}
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${appointments.length === 0 ? '<div class="table-empty"><p>No appointments found.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.completeAppointment = function(aptId) {
  const apts = load('appointments');
  const idx = apts.findIndex(a => a.id === aptId);
  if (idx !== -1) {
    apts[idx].status = 'completed';
    save('appointments', apts);

    // Generate bill
    const apt = apts[idx];
    const doc = getUser(apt.doctorId);
    const bills = load('bills');
    if (!bills.find(b => b.appointmentId === aptId)) {
      const fee = doc ? doc.fee || 100 : 100;
      bills.push({
        id: genId(),
        appointmentId: aptId,
        patientId: apt.patientId,
        doctorId: apt.doctorId,
        date: apt.date,
        items: [{ description: `Consultation — ${doc ? doc.specialization : 'General'}`, amount: fee }],
        total: fee,
        status: 'pending',
        paymentDate: null,
      });
      save('bills', bills);
    }

    showToast('Completed', 'Appointment marked as completed. Bill generated.', 'success');
    navigate(currentView);
  }
};

window.cancelAppointment = function(aptId) {
  const apts = load('appointments');
  const idx = apts.findIndex(a => a.id === aptId);
  if (idx !== -1) {
    apts[idx].status = 'cancelled';
    save('appointments', apts);
    showToast('Cancelled', 'Appointment has been cancelled.', 'warning');
    navigate(currentView);
  }
};

function renderBilling() {
  const bills = load('bills');
  const totalRevenue = bills.filter(b => b.status === 'paid').reduce((s, b) => s + b.total, 0);
  const pendingAmount = bills.filter(b => b.status === 'pending').reduce((s, b) => s + b.total, 0);

  const content = `
    <div class="stats-grid">
      <div class="stat-card teal">
        <div class="stat-icon teal">${ICONS.dollar}</div>
        <div class="stat-info">
          <h3>${formatCurrency(totalRevenue)}</h3>
          <p>Total Revenue (Paid)</p>
        </div>
      </div>
      <div class="stat-card amber">
        <div class="stat-icon amber">${ICONS.clock}</div>
        <div class="stat-info">
          <h3>${formatCurrency(pendingAmount)}</h3>
          <p>Pending Amount</p>
        </div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon purple">${ICONS.bill}</div>
        <div class="stat-info">
          <h3>${bills.length}</h3>
          <p>Total Invoices</p>
        </div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-header">
        <h2>All Bills</h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Invoice</th><th>Patient</th><th>Doctor</th><th>Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${bills.map(b => {
              const p = getUser(b.patientId);
              const d = getUser(b.doctorId);
              return `<tr>
                <td style="font-family:monospace;color:var(--accent)">#INV-${b.id.slice(-5).toUpperCase()}</td>
                <td>${p ? p.name : 'Unknown'}</td>
                <td>${d ? d.name : 'Unknown'}</td>
                <td>${formatDate(b.date)}</td>
                <td style="font-weight:700;color:var(--text)">${formatCurrency(b.total)}</td>
                <td>${statusBadge(b.status)}</td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon" onclick="viewInvoice('${b.id}')" title="View Invoice">${ICONS.eye}</button>
                    ${b.status === 'pending' ? `<button class="btn-icon" onclick="markPaid('${b.id}')" title="Mark Paid">${ICONS.check}</button>` : ''}
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.markPaid = function(billId) {
  const bills = load('bills');
  const idx = bills.findIndex(b => b.id === billId);
  if (idx !== -1) {
    bills[idx].status = 'paid';
    bills[idx].paymentDate = new Date().toISOString().split('T')[0];
    save('bills', bills);
    showToast('Payment Received', 'Bill marked as paid.', 'success');
    navigate(currentView);
  }
};

window.viewInvoice = function(billId) {
  const bill = load('bills').find(b => b.id === billId);
  if (!bill) return;
  const patient = getUser(bill.patientId);
  const doctor = getUser(bill.doctorId);

  const body = `
    <div class="invoice">
      <div class="invoice-header">
        <div class="inv-brand">
          <h3>NiiDalo HMS</h3>
          <p>Hospital Management System</p>
          <p>123 Medical Center Drive</p>
        </div>
        <div class="inv-meta">
          <div class="inv-number">#INV-${bill.id.slice(-5).toUpperCase()}</div>
          <p>Date: ${formatDate(bill.date)}</p>
          <p>${statusBadge(bill.status)}</p>
        </div>
      </div>
      <div class="invoice-details">
        <div>
          <h4>Bill To</h4>
          <p><strong>${patient ? patient.name : 'Unknown'}</strong></p>
          <p>${patient ? patient.email : ''}</p>
          <p>${patient ? patient.phone : ''}</p>
        </div>
        <div>
          <h4>Attending Doctor</h4>
          <p><strong>${doctor ? doctor.name : 'Unknown'}</strong></p>
          <p>${doctor ? doctor.specialization : ''}</p>
          <p>${doctor ? doctor.email : ''}</p>
        </div>
      </div>
      <div class="invoice-items">
        <table>
          <thead><tr><th>Description</th><th>Amount</th></tr></thead>
          <tbody>
            ${bill.items.map(item => `<tr><td>${item.description}</td><td>${formatCurrency(item.amount)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="invoice-total">
        <table>
          <tr><td>Subtotal</td><td>${formatCurrency(bill.total)}</td></tr>
          <tr><td>Tax (0%)</td><td>$0.00</td></tr>
          <tr class="total"><td>Total</td><td>${formatCurrency(bill.total)}</td></tr>
        </table>
      </div>
      ${bill.paymentDate ? `<div class="invoice-footer"><p style="color:var(--success);font-size:0.85rem">✓ Paid on ${formatDate(bill.paymentDate)}</p></div>` : ''}
    </div>
  `;

  showModal('Invoice', body, `
    <button class="btn btn-secondary" onclick="hideModal()">Close</button>
    <button class="btn btn-primary" onclick="window.print()">${ICONS.printer} Print</button>
  `);
};

function renderDepartments() {
  const depts = load('departments');
  const doctors = getDoctors();

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>Departments <span class="subtitle">${depts.length} total</span></h2>
        <button class="btn btn-primary btn-sm" onclick="showDeptForm()">${ICONS.plus} Add Department</button>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Department</th><th>Description</th><th>Doctors</th><th>Actions</th></tr></thead>
          <tbody>
            ${depts.map(d => {
              const deptDocs = doctors.filter(doc => doc.departmentId === d.id);
              return `<tr>
                <td style="font-weight:600;color:var(--text)">${d.name}</td>
                <td>${d.description}</td>
                <td><span class="badge badge-purple">${deptDocs.length} doctors</span></td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon" onclick="showDeptForm('${d.id}')" title="Edit">${ICONS.edit}</button>
                    <button class="btn-icon" onclick="deleteDept('${d.id}')" title="Delete">${ICONS.trash}</button>
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.showDeptForm = function(editId) {
  const dept = editId ? load('departments').find(d => d.id === editId) : null;
  const title = dept ? 'Edit Department' : 'Add Department';

  const body = `
    <form id="deptForm">
      <div class="form-group">
        <label>Department Name</label>
        <input type="text" class="form-control" id="deptName" value="${dept ? dept.name : ''}" required>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea class="form-control" id="deptDesc">${dept ? dept.description : ''}</textarea>
      </div>
    </form>
  `;

  showModal(title, body, `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveDept('${editId || ''}')">${ICONS.check} ${dept ? 'Update' : 'Add'}</button>
  `);
};

window.saveDept = function(editId) {
  const name = $('#deptName').value.trim();
  const description = $('#deptDesc').value.trim();
  if (!name) { showToast('Error', 'Name is required.', 'error'); return; }

  const depts = load('departments');
  if (editId) {
    const idx = depts.findIndex(d => d.id === editId);
    if (idx !== -1) { depts[idx] = { ...depts[idx], name, description }; }
  } else {
    depts.push({ id: genId(), name, description });
  }
  save('departments', depts);
  hideModal();
  showToast('Saved', `Department "${name}" saved.`, 'success');
  navigate('departments');
};

window.deleteDept = function(id) {
  let depts = load('departments');
  depts = depts.filter(d => d.id !== id);
  save('departments', depts);
  showToast('Deleted', 'Department removed.', 'success');
  navigate('departments');
};


// ===== DOCTOR VIEWS =====

function renderDoctorDashboard(user) {
  const appointments = load('appointments').filter(a => a.doctorId === user.id);
  const todayStr = new Date().toISOString().split('T')[0];
  const todayApts = appointments.filter(a => a.date === todayStr);
  const upcoming = appointments.filter(a => a.status === 'scheduled' && a.date >= todayStr);
  const completed = appointments.filter(a => a.status === 'completed');
  const uniquePatients = [...new Set(appointments.map(a => a.patientId))];

  const content = `
    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon blue">${ICONS.calendar}</div>
        <div class="stat-info">
          <h3>${todayApts.length}</h3>
          <p>Today's Appointments</p>
        </div>
      </div>
      <div class="stat-card teal">
        <div class="stat-icon teal">${ICONS.clock}</div>
        <div class="stat-info">
          <h3>${upcoming.length}</h3>
          <p>Upcoming</p>
        </div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon purple">${ICONS.users}</div>
        <div class="stat-info">
          <h3>${uniquePatients.length}</h3>
          <p>My Patients</p>
        </div>
      </div>
      <div class="stat-card amber">
        <div class="stat-icon amber">${ICONS.check}</div>
        <div class="stat-info">
          <h3>${completed.length}</h3>
          <p>Completed</p>
        </div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-header">
        <h2>Today's Schedule</h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Time</th><th>Patient</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${todayApts.length > 0 ? todayApts.sort((a,b) => a.time.localeCompare(b.time)).map(a => {
              const p = getUser(a.patientId);
              return `<tr>
                <td style="font-weight:600;color:var(--accent)">${a.time}</td>
                <td>
                  <div class="table-user">
                    <div class="table-avatar avatar-patient">${p ? initials(p.name) : '??'}</div>
                    <div class="table-user-info">
                      <div class="t-name">${p ? p.name : 'Unknown'}</div>
                    </div>
                  </div>
                </td>
                <td>${a.reason}</td>
                <td>${statusBadge(a.status)}</td>
                <td>
                  <div class="table-actions">
                    ${a.status === 'scheduled' ? `
                      <button class="btn-icon" onclick="completeAppointment('${a.id}')" title="Complete">${ICONS.check}</button>
                      <button class="btn-icon" onclick="showPrescriptionForm('${a.id}')" title="Write Prescription">${ICONS.pill}</button>
                    ` : ''}
                  </div>
                </td>
              </tr>`;
            }).join('') : '<tr><td colspan="5" class="table-empty"><p>No appointments today.</p></td></tr>'}
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-card" style="margin-top:20px">
      <div class="section-header">
        <h2>Upcoming Appointments</h2>
        <button class="btn btn-sm btn-secondary" onclick="navigate('my-appointments')">View All</button>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Patient</th><th>Date</th><th>Time</th><th>Reason</th><th>Status</th></tr></thead>
          <tbody>
            ${upcoming.slice(0, 5).map(a => {
              const p = getUser(a.patientId);
              return `<tr>
                <td>${p ? p.name : 'Unknown'}</td>
                <td>${formatDate(a.date)}</td>
                <td>${a.time}</td>
                <td>${a.reason}</td>
                <td>${statusBadge(a.status)}</td>
              </tr>`;
            }).join('')}
            ${upcoming.length === 0 ? '<tr><td colspan="5" class="table-empty"><p>No upcoming appointments.</p></td></tr>' : ''}
          </tbody>
        </table>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function renderDoctorAppointments(user) {
  const appointments = load('appointments').filter(a => a.doctorId === user.id).sort((a, b) => b.date.localeCompare(a.date));

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>My Appointments <span class="subtitle">${appointments.length} total</span></h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Patient</th><th>Date</th><th>Time</th><th>Reason</th><th>Notes</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${appointments.map(a => {
              const p = getUser(a.patientId);
              return `<tr>
                <td>
                  <div class="table-user">
                    <div class="table-avatar avatar-patient">${p ? initials(p.name) : '??'}</div>
                    <div class="table-user-info"><div class="t-name">${p ? p.name : 'Unknown'}</div></div>
                  </div>
                </td>
                <td>${formatDate(a.date)}</td>
                <td>${a.time}</td>
                <td>${a.reason}</td>
                <td style="max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.notes || '—'}</td>
                <td>${statusBadge(a.status)}</td>
                <td>
                  <div class="table-actions">
                    ${a.status === 'scheduled' ? `
                      <button class="btn-icon" onclick="completeAppointment('${a.id}')" title="Complete">${ICONS.check}</button>
                      <button class="btn-icon" onclick="showPrescriptionForm('${a.id}')" title="Prescription">${ICONS.pill}</button>
                      <button class="btn-icon" onclick="cancelAppointment('${a.id}')" title="Cancel">${ICONS.x}</button>
                    ` : a.status === 'completed' ? `
                      <button class="btn-icon" onclick="showPrescriptionForm('${a.id}')" title="Prescription">${ICONS.pill}</button>
                    ` : ''}
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${appointments.length === 0 ? '<div class="table-empty"><p>No appointments.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function renderDoctorPatients(user) {
  const appointments = load('appointments').filter(a => a.doctorId === user.id);
  const patientIds = [...new Set(appointments.map(a => a.patientId))];
  const patients = patientIds.map(id => getUser(id)).filter(Boolean);

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>My Patients <span class="subtitle">${patients.length} total</span></h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Patient</th><th>Age</th><th>Gender</th><th>Blood Group</th><th>Visits</th><th>Last Visit</th></tr></thead>
          <tbody>
            ${patients.map(p => {
              const pApts = appointments.filter(a => a.patientId === p.id);
              const lastApt = pApts.sort((a,b) => b.date.localeCompare(a.date))[0];
              return `<tr>
                <td>
                  <div class="table-user">
                    <div class="table-avatar avatar-patient">${initials(p.name)}</div>
                    <div class="table-user-info">
                      <div class="t-name">${p.name}</div>
                      <div class="t-sub">${p.email}</div>
                    </div>
                  </div>
                </td>
                <td>${p.age || '—'}</td>
                <td>${p.gender || '—'}</td>
                <td><span class="badge badge-teal">${p.bloodGroup || '—'}</span></td>
                <td>${pApts.length}</td>
                <td>${lastApt ? formatDate(lastApt.date) : '—'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${patients.length === 0 ? '<div class="table-empty"><p>No patients yet.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function renderDoctorPrescriptions(user) {
  const prescriptions = load('prescriptions').filter(p => p.doctorId === user.id).sort((a,b) => b.date.localeCompare(a.date));

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>Prescriptions <span class="subtitle">${prescriptions.length} total</span></h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Patient</th><th>Date</th><th>Medications</th><th>Notes</th><th>Actions</th></tr></thead>
          <tbody>
            ${prescriptions.map(prx => {
              const p = getUser(prx.patientId);
              return `<tr>
                <td>
                  <div class="table-user">
                    <div class="table-avatar avatar-patient">${p ? initials(p.name) : '??'}</div>
                    <div class="table-user-info"><div class="t-name">${p ? p.name : 'Unknown'}</div></div>
                  </div>
                </td>
                <td>${formatDate(prx.date)}</td>
                <td>${prx.medications.map(m => `<span class="badge badge-teal" style="margin:2px">${m.name} ${m.dosage}</span>`).join('')}</td>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${prx.notes || '—'}</td>
                <td><button class="btn-icon" onclick="viewPrescription('${prx.id}')" title="View">${ICONS.eye}</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${prescriptions.length === 0 ? '<div class="table-empty"><p>No prescriptions yet.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.showPrescriptionForm = function(aptId) {
  const apt = load('appointments').find(a => a.id === aptId);
  if (!apt) return;
  const patient = getUser(apt.patientId);
  const existing = load('prescriptions').find(p => p.appointmentId === aptId);

  let medCount = existing ? existing.medications.length : 1;

  function medRow(i, med) {
    return `<div class="form-row" style="grid-template-columns:2fr 1fr 1fr 1fr;gap:8px;margin-bottom:8px" id="medRow${i}">
      <input type="text" class="form-control" placeholder="Medication" value="${med ? med.name : ''}" id="medName${i}">
      <input type="text" class="form-control" placeholder="Dosage" value="${med ? med.dosage : ''}" id="medDose${i}">
      <input type="text" class="form-control" placeholder="Frequency" value="${med ? med.frequency : ''}" id="medFreq${i}">
      <input type="text" class="form-control" placeholder="Duration" value="${med ? med.duration : ''}" id="medDur${i}">
    </div>`;
  }

  const body = `
    <div style="margin-bottom:16px">
      <strong>Patient:</strong> ${patient ? patient.name : 'Unknown'} &nbsp;|&nbsp; <strong>Date:</strong> ${formatDate(apt.date)}
    </div>
    <h4 style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:8px">Medications</h4>
    <div id="medsContainer">
      ${existing ? existing.medications.map((m, i) => medRow(i, m)).join('') : medRow(0, null)}
    </div>
    <button class="btn btn-sm btn-secondary" style="margin-bottom:16px" onclick="addMedRow()">${ICONS.plus} Add Medication</button>
    <div class="form-group">
      <label>Notes</label>
      <textarea class="form-control" id="prxNotes">${existing ? existing.notes : ''}</textarea>
    </div>
  `;

  window._medCount = medCount;
  window.addMedRow = function() {
    const container = document.getElementById('medsContainer');
    const div = document.createElement('div');
    div.innerHTML = medRow(window._medCount, null);
    container.appendChild(div.firstElementChild);
    window._medCount++;
  };

  showModal('Write Prescription', body, `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="savePrescription('${aptId}')">${ICONS.check} Save Prescription</button>
  `);
};

window.savePrescription = function(aptId) {
  const apt = load('appointments').find(a => a.id === aptId);
  if (!apt) return;

  const medications = [];
  for (let i = 0; i < window._medCount; i++) {
    const name = document.getElementById(`medName${i}`);
    if (!name) continue;
    const n = name.value.trim();
    if (!n) continue;
    medications.push({
      name: n,
      dosage: (document.getElementById(`medDose${i}`)?.value || '').trim(),
      frequency: (document.getElementById(`medFreq${i}`)?.value || '').trim(),
      duration: (document.getElementById(`medDur${i}`)?.value || '').trim(),
    });
  }

  if (medications.length === 0) { showToast('Error', 'Add at least one medication.', 'error'); return; }

  const notes = $('#prxNotes').value.trim();
  const prescriptions = load('prescriptions');
  const existIdx = prescriptions.findIndex(p => p.appointmentId === aptId);

  const prxData = {
    id: existIdx !== -1 ? prescriptions[existIdx].id : genId(),
    appointmentId: aptId,
    patientId: apt.patientId,
    doctorId: apt.doctorId,
    date: apt.date,
    medications,
    notes,
  };

  if (existIdx !== -1) {
    prescriptions[existIdx] = prxData;
  } else {
    prescriptions.push(prxData);
  }

  save('prescriptions', prescriptions);
  hideModal();
  showToast('Saved', 'Prescription saved successfully.', 'success');
  navigate(currentView);
};

window.viewPrescription = function(prxId) {
  const prx = load('prescriptions').find(p => p.id === prxId);
  if (!prx) return;
  const patient = getUser(prx.patientId);
  const doctor = getUser(prx.doctorId);

  const body = `
    <div style="margin-bottom:20px">
      <div class="form-row">
        <div><h4 style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">Patient</h4><p>${patient ? patient.name : 'Unknown'}</p></div>
        <div><h4 style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">Doctor</h4><p>${doctor ? doctor.name : 'Unknown'}</p></div>
      </div>
      <p style="margin-top:8px;color:var(--text-muted);font-size:0.85rem">Date: ${formatDate(prx.date)}</p>
    </div>
    <h4 style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:8px">Medications</h4>
    <table class="data-table" style="margin-bottom:16px">
      <thead><tr><th>Medication</th><th>Dosage</th><th>Frequency</th><th>Duration</th></tr></thead>
      <tbody>
        ${prx.medications.map(m => `<tr><td style="color:var(--text);font-weight:600">${m.name}</td><td>${m.dosage}</td><td>${m.frequency}</td><td>${m.duration}</td></tr>`).join('')}
      </tbody>
    </table>
    ${prx.notes ? `<div><h4 style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px">Doctor's Notes</h4><p style="font-size:0.88rem;color:var(--text-secondary)">${prx.notes}</p></div>` : ''}
  `;

  showModal('Prescription Details', body, `
    <button class="btn btn-secondary" onclick="hideModal()">Close</button>
    <button class="btn btn-primary" onclick="window.print()">${ICONS.printer} Print</button>
  `);
};

function renderDoctorSchedule(user) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const schedule = user.schedule || {};

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>My Weekly Schedule</h2>
        <button class="btn btn-primary btn-sm" onclick="editSchedule()">${ICONS.edit} Edit Schedule</button>
      </div>
      <div class="section-body">
        <div class="schedule-grid">
          ${days.map(day => {
            const slots = schedule[day] || [];
            return `<div class="schedule-day ${slots.length > 0 ? 'active' : ''}">
              <div class="day-name">${day}</div>
              <div class="day-slots">
                ${slots.length > 0 ? slots.map(s => `<div>${s}</div>`).join('') : '<span style="color:var(--text-muted);font-size:0.75rem">Off</span>'}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.editSchedule = function() {
  const user = currentUser();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const schedule = user.schedule || {};
  const allSlots = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

  const body = `
    <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:16px">Select your available time slots for each day.</p>
    ${days.map(day => {
      const active = schedule[day] || [];
      return `<div style="margin-bottom:16px">
        <label style="font-size:0.8rem;font-weight:600;color:var(--text)">${day}</label>
        <div class="slots-grid" style="margin-top:6px">
          ${allSlots.map(slot => `<div class="time-slot ${active.includes(slot) ? 'selected' : ''}" data-day="${day}" data-slot="${slot}" onclick="toggleSlot(this)">${slot}</div>`).join('')}
        </div>
      </div>`;
    }).join('')}
  `;

  showModal('Edit Schedule', body, `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveSchedule()">${ICONS.check} Save Schedule</button>
  `);
};

window.toggleSlot = function(el) { el.classList.toggle('selected'); };

window.saveSchedule = function() {
  const user = currentUser();
  const schedule = {};
  document.querySelectorAll('.time-slot.selected').forEach(el => {
    const day = el.dataset.day;
    const slot = el.dataset.slot;
    if (!schedule[day]) schedule[day] = [];
    schedule[day].push(slot);
  });

  // Sort slots
  Object.keys(schedule).forEach(day => schedule[day].sort());

  const users = load('users');
  const idx = users.findIndex(u => u.id === user.id);
  if (idx !== -1) {
    users[idx].schedule = schedule;
    save('users', users);
  }

  hideModal();
  showToast('Saved', 'Schedule updated.', 'success');
  navigate('schedule');
};


// ===== PATIENT VIEWS =====

function renderPatientDashboard(user) {
  const appointments = load('appointments').filter(a => a.patientId === user.id);
  const bills = load('bills').filter(b => b.patientId === user.id);
  const todayStr = new Date().toISOString().split('T')[0];
  const upcoming = appointments.filter(a => a.status === 'scheduled' && a.date >= todayStr);
  const pendingBills = bills.filter(b => b.status === 'pending');
  const totalSpent = bills.filter(b => b.status === 'paid').reduce((s, b) => s + b.total, 0);

  const content = `
    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon blue">${ICONS.calendar}</div>
        <div class="stat-info">
          <h3>${upcoming.length}</h3>
          <p>Upcoming Appointments</p>
        </div>
      </div>
      <div class="stat-card teal">
        <div class="stat-icon teal">${ICONS.check}</div>
        <div class="stat-info">
          <h3>${appointments.filter(a => a.status === 'completed').length}</h3>
          <p>Completed Visits</p>
        </div>
      </div>
      <div class="stat-card amber">
        <div class="stat-icon amber">${ICONS.bill}</div>
        <div class="stat-info">
          <h3>${pendingBills.length}</h3>
          <p>Pending Bills</p>
        </div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon purple">${ICONS.dollar}</div>
        <div class="stat-info">
          <h3>${formatCurrency(totalSpent)}</h3>
          <p>Total Spent</p>
        </div>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <h2>Quick Actions</h2>
      </div>
      <div class="section-body">
        <div class="quick-actions">
          <div class="quick-action" onclick="navigate('book-appointment')">
            <div class="qa-icon stat-icon teal">${ICONS.plus}</div>
            <p>Book Appointment</p>
            <span>Schedule a visit</span>
          </div>
          <div class="quick-action" onclick="navigate('my-appointments')">
            <div class="qa-icon stat-icon blue">${ICONS.calendar}</div>
            <p>My Appointments</p>
            <span>View all visits</span>
          </div>
          <div class="quick-action" onclick="navigate('my-bills')">
            <div class="qa-icon stat-icon amber">${ICONS.bill}</div>
            <p>My Bills</p>
            <span>View invoices</span>
          </div>
          <div class="quick-action" onclick="navigate('medical-history')">
            <div class="qa-icon stat-icon purple">${ICONS.history}</div>
            <p>Medical History</p>
            <span>Past records</span>
          </div>
        </div>
      </div>
    </div>

    ${upcoming.length > 0 ? `
    <div class="section-card">
      <div class="section-header"><h2>Upcoming Appointments</h2></div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Doctor</th><th>Date</th><th>Time</th><th>Reason</th><th>Status</th></tr></thead>
          <tbody>
            ${upcoming.map(a => {
              const d = getUser(a.doctorId);
              return `<tr>
                <td>${d ? d.name : 'Unknown'}</td>
                <td>${formatDate(a.date)}</td>
                <td>${a.time}</td>
                <td>${a.reason}</td>
                <td>${statusBadge(a.status)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>` : ''}
  `;

  $('#contentArea').innerHTML = content;
}

function renderBookAppointment(user) {
  const depts = load('departments');
  const doctors = getDoctors();

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>Book New Appointment</h2>
      </div>
      <div class="section-body">
        <!-- Wizard Steps -->
        <div class="wizard-steps">
          <div class="wizard-step active" id="ws1"><span class="step-num">1</span> Select Doctor</div>
          <div class="wizard-connector" id="wc1"></div>
          <div class="wizard-step" id="ws2"><span class="step-num">2</span> Pick Date & Time</div>
          <div class="wizard-connector" id="wc2"></div>
          <div class="wizard-step" id="ws3"><span class="step-num">3</span> Confirm</div>
        </div>

        <!-- Step 1: Select Doctor -->
        <div class="wizard-panel active" id="wp1">
          <div class="form-group">
            <label>Filter by Department</label>
            <select class="form-control" id="deptFilter" onchange="filterDoctors()" style="max-width:300px">
              <option value="">All Departments</option>
              ${depts.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
            </select>
          </div>
          <div class="doctor-grid" id="doctorGrid">
            ${doctors.map(d => {
              const dept = depts.find(dp => dp.id === d.departmentId);
              return `<div class="doctor-pick-card" data-docid="${d.id}" data-dept="${d.departmentId}" onclick="selectDoctor(this, '${d.id}')">
                <div class="dp-avatar avatar-doctor">${initials(d.name)}</div>
                <div class="dp-name">${d.name}</div>
                <div class="dp-spec">${d.specialization} ${dept ? '• ' + dept.name : ''}</div>
                <div class="dp-fee">${formatCurrency(d.fee || 0)} / visit</div>
              </div>`;
            }).join('')}
          </div>
          <div style="margin-top:20px;text-align:right">
            <button class="btn btn-primary" id="toStep2Btn" onclick="goToStep(2)" disabled>Next: Pick Date & Time</button>
          </div>
        </div>

        <!-- Step 2: Pick Date & Time -->
        <div class="wizard-panel" id="wp2">
          <div class="form-row" style="margin-bottom:20px">
            <div class="form-group">
              <label>Select Date</label>
              <input type="date" class="form-control" id="aptDate" min="${new Date().toISOString().split('T')[0]}" onchange="loadTimeSlots()">
            </div>
            <div class="form-group">
              <label>Reason for Visit</label>
              <input type="text" class="form-control" id="aptReason" placeholder="e.g., General checkup">
            </div>
          </div>
          <div id="timeSlotsArea">
            <p style="color:var(--text-muted);font-size:0.88rem">Select a date to see available time slots.</p>
          </div>
          <div style="margin-top:20px;display:flex;justify-content:space-between">
            <button class="btn btn-secondary" onclick="goToStep(1)">Back</button>
            <button class="btn btn-primary" id="toStep3Btn" onclick="goToStep(3)" disabled>Next: Confirm</button>
          </div>
        </div>

        <!-- Step 3: Confirm -->
        <div class="wizard-panel" id="wp3">
          <div id="bookingSummary"></div>
          <div style="margin-top:24px;display:flex;justify-content:space-between">
            <button class="btn btn-secondary" onclick="goToStep(2)">Back</button>
            <button class="btn btn-primary btn-lg" onclick="confirmBooking()">${ICONS.check} Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;

  // Booking state
  window._booking = { doctorId: null, date: null, time: null, reason: '' };
}

window.filterDoctors = function() {
  const deptId = $('#deptFilter').value;
  document.querySelectorAll('.doctor-pick-card').forEach(card => {
    if (!deptId || card.dataset.dept === deptId) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
};

window.selectDoctor = function(el, docId) {
  document.querySelectorAll('.doctor-pick-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  window._booking.doctorId = docId;
  $('#toStep2Btn').disabled = false;
};

window.goToStep = function(step) {
  document.querySelectorAll('.wizard-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active', 'done'));
  document.querySelectorAll('.wizard-connector').forEach(c => c.classList.remove('active'));

  for (let i = 1; i <= 3; i++) {
    if (i < step) {
      $(`#ws${i}`).classList.add('done');
    } else if (i === step) {
      $(`#ws${i}`).classList.add('active');
    }
    if (i < step && $(`#wc${i}`)) $(`#wc${i}`).classList.add('active');
  }

  $(`#wp${step}`).classList.add('active');

  if (step === 3) renderBookingSummary();
};

window.loadTimeSlots = function() {
  const date = $('#aptDate').value;
  if (!date || !window._booking.doctorId) return;

  window._booking.date = date;
  window._booking.time = null;
  $('#toStep3Btn').disabled = true;

  const doc = getUser(window._booking.doctorId);
  const dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date(date + 'T00:00:00').getDay()];
  const availableSlots = doc.schedule ? (doc.schedule[dayName] || []) : [];

  // Check already booked slots
  const booked = load('appointments')
    .filter(a => a.doctorId === doc.id && a.date === date && a.status === 'scheduled')
    .map(a => a.time);

  if (availableSlots.length === 0) {
    $('#timeSlotsArea').innerHTML = `<p style="color:var(--warning);font-size:0.88rem">Dr. ${doc.name} is not available on ${dayName}. Please choose another date.</p>`;
    return;
  }

  $('#timeSlotsArea').innerHTML = `
    <label style="font-size:0.8rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.06em">Available Slots for ${dayName}</label>
    <div class="slots-grid">
      ${availableSlots.map(slot => {
        const isBooked = booked.includes(slot);
        return `<div class="time-slot ${isBooked ? 'booked' : ''}" ${isBooked ? '' : `onclick="selectTime('${slot}', this)"`}>${slot} ${isBooked ? '(Booked)' : ''}</div>`;
      }).join('')}
    </div>
  `;
};

window.selectTime = function(time, el) {
  document.querySelectorAll('#timeSlotsArea .time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  window._booking.time = time;
  $('#toStep3Btn').disabled = false;
};

function renderBookingSummary() {
  const b = window._booking;
  const doc = getUser(b.doctorId);
  const reason = $('#aptReason')?.value || '';
  b.reason = reason;
  const depts = load('departments');
  const dept = doc ? depts.find(d => d.id === doc.departmentId) : null;

  $('#bookingSummary').innerHTML = `
    <div class="invoice" style="max-width:100%">
      <div class="invoice-header">
        <div class="inv-brand"><h3>Booking Summary</h3><p>Please review before confirming</p></div>
      </div>
      <div class="invoice-details">
        <div>
          <h4>Doctor</h4>
          <p><strong>${doc ? doc.name : '—'}</strong></p>
          <p>${doc ? doc.specialization : ''} ${dept ? '• ' + dept.name : ''}</p>
        </div>
        <div>
          <h4>Appointment</h4>
          <p><strong>${formatDate(b.date)}</strong> at <strong>${b.time || '—'}</strong></p>
          <p>Reason: ${reason || 'Not specified'}</p>
        </div>
      </div>
      <div class="invoice-total">
        <table>
          <tr><td>Consultation Fee</td><td>${doc ? formatCurrency(doc.fee || 0) : '—'}</td></tr>
          <tr class="total"><td>Estimated Total</td><td>${doc ? formatCurrency(doc.fee || 0) : '—'}</td></tr>
        </table>
      </div>
    </div>
  `;
}

window.confirmBooking = function() {
  const b = window._booking;
  const user = currentUser();

  if (!b.doctorId || !b.date || !b.time) {
    showToast('Error', 'Please complete all steps.', 'error');
    return;
  }

  const appointments = load('appointments');
  appointments.push({
    id: genId(),
    patientId: user.id,
    doctorId: b.doctorId,
    date: b.date,
    time: b.time,
    status: 'scheduled',
    reason: b.reason || 'General consultation',
    notes: '',
  });
  save('appointments', appointments);

  showToast('Booked!', 'Your appointment has been scheduled.', 'success');
  navigate('my-appointments');
};

function renderPatientAppointments(user) {
  const appointments = load('appointments').filter(a => a.patientId === user.id).sort((a, b) => b.date.localeCompare(a.date));

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>My Appointments <span class="subtitle">${appointments.length} total</span></h2>
        <button class="btn btn-primary btn-sm" onclick="navigate('book-appointment')">${ICONS.plus} Book New</button>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Doctor</th><th>Date</th><th>Time</th><th>Reason</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${appointments.map(a => {
              const d = getUser(a.doctorId);
              return `<tr>
                <td>
                  <div class="table-user">
                    <div class="table-avatar avatar-doctor">${d ? initials(d.name) : '??'}</div>
                    <div class="table-user-info">
                      <div class="t-name">${d ? d.name : 'Unknown'}</div>
                      <div class="t-sub">${d ? d.specialization : ''}</div>
                    </div>
                  </div>
                </td>
                <td>${formatDate(a.date)}</td>
                <td>${a.time}</td>
                <td>${a.reason}</td>
                <td>${statusBadge(a.status)}</td>
                <td>
                  <div class="table-actions">
                    ${a.status === 'scheduled' ? `<button class="btn-icon" onclick="cancelAppointment('${a.id}')" title="Cancel">${ICONS.x}</button>` : ''}
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${appointments.length === 0 ? '<div class="table-empty"><p>No appointments yet. <a href="#" onclick="navigate(\'book-appointment\')">Book one now!</a></p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function renderPatientBills(user) {
  const bills = load('bills').filter(b => b.patientId === user.id);
  const totalPaid = bills.filter(b => b.status === 'paid').reduce((s, b) => s + b.total, 0);
  const pendingAmt = bills.filter(b => b.status === 'pending').reduce((s, b) => s + b.total, 0);

  const content = `
    <div class="stats-grid">
      <div class="stat-card teal">
        <div class="stat-icon teal">${ICONS.check}</div>
        <div class="stat-info">
          <h3>${formatCurrency(totalPaid)}</h3>
          <p>Total Paid</p>
        </div>
      </div>
      <div class="stat-card amber">
        <div class="stat-icon amber">${ICONS.clock}</div>
        <div class="stat-info">
          <h3>${formatCurrency(pendingAmt)}</h3>
          <p>Pending Amount</p>
        </div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-header">
        <h2>My Bills</h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Invoice</th><th>Doctor</th><th>Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${bills.map(b => {
              const d = getUser(b.doctorId);
              return `<tr>
                <td style="font-family:monospace;color:var(--accent)">#INV-${b.id.slice(-5).toUpperCase()}</td>
                <td>${d ? d.name : 'Unknown'}</td>
                <td>${formatDate(b.date)}</td>
                <td style="font-weight:700;color:var(--text)">${formatCurrency(b.total)}</td>
                <td>${statusBadge(b.status)}</td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon" onclick="viewInvoice('${b.id}')" title="View Invoice">${ICONS.eye}</button>
                    ${b.status === 'pending' ? `<button class="btn btn-sm btn-primary" onclick="payBill('${b.id}')">Pay Now</button>` : ''}
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${bills.length === 0 ? '<div class="table-empty"><p>No bills yet.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.payBill = function(billId) {
  const bills = load('bills');
  const idx = bills.findIndex(b => b.id === billId);
  if (idx !== -1) {
    bills[idx].status = 'paid';
    bills[idx].paymentDate = new Date().toISOString().split('T')[0];
    save('bills', bills);
    showToast('Payment Successful', 'Your bill has been paid.', 'success');
    navigate(currentView);
  }
};

function renderMedicalHistory(user) {
  const prescriptions = load('prescriptions').filter(p => p.patientId === user.id).sort((a, b) => b.date.localeCompare(a.date));
  const appointments = load('appointments').filter(a => a.patientId === user.id && a.status === 'completed').sort((a, b) => b.date.localeCompare(a.date));

  const content = `
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <h2>Visit History <span class="subtitle">${appointments.length} visits</span></h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Date</th><th>Doctor</th><th>Reason</th><th>Notes</th></tr></thead>
          <tbody>
            ${appointments.map(a => {
              const d = getUser(a.doctorId);
              return `<tr>
                <td>${formatDate(a.date)}</td>
                <td>${d ? d.name : 'Unknown'}<br><span style="color:var(--text-muted);font-size:0.78rem">${d ? d.specialization : ''}</span></td>
                <td>${a.reason}</td>
                <td>${a.notes || '—'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${appointments.length === 0 ? '<div class="table-empty"><p>No visit history yet.</p></div>' : ''}
      </div>
    </div>

    <div class="section-card">
      <div class="section-header">
        <h2>Prescriptions <span class="subtitle">${prescriptions.length} total</span></h2>
      </div>
      <div class="section-body no-pad">
        <table class="data-table">
          <thead><tr><th>Date</th><th>Doctor</th><th>Medications</th><th>Actions</th></tr></thead>
          <tbody>
            ${prescriptions.map(prx => {
              const d = getUser(prx.doctorId);
              return `<tr>
                <td>${formatDate(prx.date)}</td>
                <td>${d ? d.name : 'Unknown'}</td>
                <td>${prx.medications.map(m => `<span class="badge badge-teal" style="margin:2px">${m.name} ${m.dosage}</span>`).join('')}</td>
                <td><button class="btn-icon" onclick="viewPrescription('${prx.id}')" title="View">${ICONS.eye}</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
        ${prescriptions.length === 0 ? '<div class="table-empty"><p>No prescriptions yet.</p></div>' : ''}
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

function renderPatientProfile(user) {
  const avatarClass = 'avatar-patient';

  const content = `
    <div class="section-card">
      <div class="section-header">
        <h2>My Profile</h2>
        <button class="btn btn-primary btn-sm" onclick="editProfile()">${ICONS.edit} Edit Profile</button>
      </div>
      <div class="section-body">
        <div class="profile-card">
          <div class="profile-avatar ${avatarClass}">${initials(user.name)}</div>
          <div class="profile-info">
            <h2>${user.name}</h2>
            <div class="profile-role">Patient</div>
            <div class="profile-fields">
              <div class="profile-field"><label>Email</label><p>${user.email || '—'}</p></div>
              <div class="profile-field"><label>Phone</label><p>${user.phone || '—'}</p></div>
              <div class="profile-field"><label>Age</label><p>${user.age || '—'}</p></div>
              <div class="profile-field"><label>Gender</label><p>${user.gender || '—'}</p></div>
              <div class="profile-field"><label>Blood Group</label><p>${user.bloodGroup || '—'}</p></div>
              <div class="profile-field"><label>Address</label><p>${user.address || '—'}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $('#contentArea').innerHTML = content;
}

window.editProfile = function() {
  const user = currentUser();
  const body = `
    <form id="profileForm">
      <div class="form-row">
        <div class="form-group"><label>Full Name</label><input type="text" class="form-control" id="epName" value="${user.name}"></div>
        <div class="form-group"><label>Email</label><input type="email" class="form-control" id="epEmail" value="${user.email || ''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input type="text" class="form-control" id="epPhone" value="${user.phone || ''}"></div>
        <div class="form-group"><label>Age</label><input type="number" class="form-control" id="epAge" value="${user.age || ''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Gender</label>
          <select class="form-control" id="epGender">
            <option value="">Select</option>
            <option value="Male" ${user.gender === 'Male' ? 'selected' : ''}>Male</option>
            <option value="Female" ${user.gender === 'Female' ? 'selected' : ''}>Female</option>
            <option value="Other" ${user.gender === 'Other' ? 'selected' : ''}>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Blood Group</label>
          <select class="form-control" id="epBlood">
            <option value="">Select</option>
            ${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(bg => `<option value="${bg}" ${user.bloodGroup === bg ? 'selected' : ''}>${bg}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group"><label>Address</label><textarea class="form-control" id="epAddress">${user.address || ''}</textarea></div>
    </form>
  `;

  showModal('Edit Profile', body, `
    <button class="btn btn-secondary" onclick="hideModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveProfile()">${ICONS.check} Save</button>
  `);
};

window.saveProfile = function() {
  const user = currentUser();
  const users = load('users');
  const idx = users.findIndex(u => u.id === user.id);

  if (idx !== -1) {
    users[idx].name = $('#epName').value.trim() || users[idx].name;
    users[idx].email = $('#epEmail').value.trim();
    users[idx].phone = $('#epPhone').value.trim();
    users[idx].age = parseInt($('#epAge').value) || null;
    users[idx].gender = $('#epGender').value;
    users[idx].bloodGroup = $('#epBlood').value;
    users[idx].address = $('#epAddress').value.trim();
    save('users', users);
  }

  hideModal();
  showToast('Updated', 'Profile has been updated.', 'success');
  navigate('profile');

  // Update sidebar
  const updated = getUser(user.id);
  if (updated) {
    $('#userName').textContent = updated.name;
    $('#userAvatar').textContent = initials(updated.name);
  }
};


// ===== GLOBAL SEARCH =====
function setupSearch() {
  const input = $('#globalSearch');
  if (!input) return;

  input.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (!query) return;

    // Search in visible tables
    document.querySelectorAll('.data-table tbody tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(query) ? '' : 'none';
    });
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      document.querySelectorAll('.data-table tbody tr').forEach(row => row.style.display = '');
    }
  });
}


// ===== MOTION PRIMITIVES =====
const MotionPrimitives = {
  init() {
    this.initCursor();
    this.initTilt();
    this.initMagnetic();
    this.initSpotlight();
    this.initInView();
  },

  initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
      cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    });

    document.addEventListener('mouseover', e => {
      if (e.target.closest('button, a, .nav-item, .doctor-pick-card, .quick-action, .time-slot, .table-actions')) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
    });
  },

  initTilt() {
    document.querySelectorAll('.tilt-card').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const tiltX = (y - cy) / cy * -10;
        const tiltY = (x - cx) / cx * 10;
        el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  },

  initMagnetic() {
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const hx = rect.left + rect.width / 2;
        const hy = rect.top + rect.height / 2;
        const dx = (e.clientX - hx) * 0.3;
        const dy = (e.clientY - hy) * 0.3;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = `translate(0px, 0px)`;
      });
    });
  },

  initSpotlight() {
    document.querySelectorAll('.stat-card, .section-card').forEach(el => {
      if (!el.classList.contains('spotlight-card')) {
        el.classList.add('spotlight-card');
      }
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  },

  initInView() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.stat-card, .section-card, .quick-action, .doctor-pick-card').forEach((el, index) => {
      if (!el.classList.contains('in-view')) {
        el.classList.add('in-view');
        el.style.transitionDelay = `${index * 50}ms`;
      }
    });

    document.querySelectorAll('.in-view').forEach(el => observer.observe(el));
  },

  animateNumber(el, value, isCurrency = false) {
    if (!el) return;
    const valStr = value.toString();
    el.innerHTML = '';
    el.classList.add('sliding-number');
    
    if (isCurrency) {
      const curr = document.createElement('span');
      curr.textContent = '$';
      el.appendChild(curr);
    }
    
    for (let i = 0; i < valStr.length; i++) {
      if (valStr[i] === '.' || valStr[i] === ',') {
        const sep = document.createElement('span');
        sep.textContent = valStr[i];
        el.appendChild(sep);
        continue;
      }
      
      const digitWrapper = document.createElement('span');
      digitWrapper.className = 'sliding-digit';
      
      const targetDigit = parseInt(valStr[i], 10);
      for (let d = 0; d <= 9; d++) {
        const dEl = document.createElement('span');
        dEl.textContent = d;
        digitWrapper.appendChild(dEl);
      }
      
      el.appendChild(digitWrapper);
      
      setTimeout(() => {
        digitWrapper.style.transform = `translateY(-${targetDigit}em)`;
      }, 50 + (i * 100));
    }
  },

  reinit() {
    this.initTilt();
    this.initMagnetic();
    this.initSpotlight();
    this.initInView();
  }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  MotionPrimitives.init();
  seedData();

  const user = currentUser();

  if (user) {
    showApp(user);
  } else {
    showLogin();
  }

  // Modal close
  $('#modalClose').addEventListener('click', hideModal);
  $('#modalOverlay').addEventListener('click', (e) => {
    if (e.target === $('#modalOverlay')) hideModal();
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
  });

  // Login form
  $('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = $('#loginUsername').value.trim();
    const password = $('#loginPassword').value;
    const role = $('#loginRole').value;

    if (!role) {
      $('#loginError').textContent = 'Please select a role.';
      $('#loginError').classList.add('show');
      return;
    }

    const user = login(username, password, role);
    if (user) {
      $('#loginError').classList.remove('show');
      showApp(user);
    } else {
      $('#loginError').textContent = 'Invalid username, password, or role.';
      $('#loginError').classList.add('show');
    }
  });

  // Logout
  $('#logoutBtn').addEventListener('click', logout);

  // Mobile menu toggle
  $('#menuToggle').addEventListener('click', () => {
    $('#sidebar').classList.toggle('open');
  });
});

function showLogin() {
  $('#loginPage').classList.remove('hidden');
  $('#app').classList.add('hidden');
}

function showApp(user) {
  $('#loginPage').classList.add('hidden');
  $('#app').classList.remove('hidden');
  currentView = 'dashboard';
  renderSidebar(user);
  renderView(user, 'dashboard');
  setupSearch();
}
