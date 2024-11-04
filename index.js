// Helper function to parse the date from DD-MM-YYYY to a Date object
function parseDate(dateString) {
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // month is zero-indexed in JavaScript Date
}

// Sorting function for an array of student objects
function sortStudents(students) {
  return students.sort((a, b) => {
      // Calculate total marks for both students
      const totalMarksA = a.chemistry + a.biology;
      const totalMarksB = b.chemistry + b.biology;

      // 1. Compare total marks (higher first)
      if (totalMarksA !== totalMarksB) {
          return totalMarksB - totalMarksA;
      }

      // 2. Compare biology marks if total marks are the same (higher first)
      if (a.biology !== b.biology) {
          return b.biology - a.biology;
      }

      // 3. Compare chemistry marks if biology marks are the same (higher first)
      if (a.chemistry !== b.chemistry) {
          return b.chemistry - a.chemistry;
      }

      // 4. Compare date of birth (older first)
      const dateA = parseDate(a.dateOfBirth);
      const dateB = parseDate(b.dateOfBirth);
      return dateA - dateB; // Ascending order for date
  });
}

// Example usage
const students = [
  { name: "John", chemistry: 75, biology: 85, dateOfBirth: "15-08-2001" },
  { name: "Alice", chemistry: 85, biology: 80, dateOfBirth: "20-07-2000" },
  { name: "Bob", chemistry: 75, biology: 85, dateOfBirth: "10-10-2000" },
  { name: "Eve", chemistry: 70, biology: 85, dateOfBirth: "01-12-1999" },
];

const sortedStudents = sortStudents(students);
console.log(sortedStudents);
