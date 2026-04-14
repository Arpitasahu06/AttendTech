import {
  STUDENTS_BY_CLASS,
  SCHEDULE,
  TEACHER,
  WEEKLY_REPORT,
  MONTHLY_TREND,
  CLASSES,
  SUBJECTS,
} from './data';

// Fake network delay — real API jaisa feel
function delay(ms = 700) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Simulate random network error (5% chance) — real world jaisa
function mayFail() {
  return Math.random() < 0.05;
}

// ── Fetch students by class ──
export async function fetchStudents(classId) {
  await delay(600);
  if (mayFail()) throw new Error('Failed to fetch students. Please retry.');
  const students = STUDENTS_BY_CLASS[classId];
  if (!students) throw new Error(`No students found for class: ${classId}`);
  return students;
}

// ── Fetch schedule ──
export async function fetchSchedule() {
  await delay(500);
  if (mayFail()) throw new Error('Failed to load schedule.');
  return SCHEDULE;
}

// ── Fetch teacher profile ──
export async function fetchTeacherProfile() {
  await delay(400);
  if (mayFail()) throw new Error('Failed to load profile.');
  return TEACHER;
}

// ── Fetch report data ──
export async function fetchReportData(classId) {
  await delay(800);
  if (mayFail()) throw new Error('Failed to load report data.');
  const students = STUDENTS_BY_CLASS[classId] || [];
  return { students, weeklyReport: WEEKLY_REPORT, monthlyTrend: MONTHLY_TREND };
}

// ── Fetch classes and subjects (for dashboard filter) ──
export async function fetchClassesAndSubjects() {
  await delay(300);
  return { classes: CLASSES, subjects: SUBJECTS };
}
