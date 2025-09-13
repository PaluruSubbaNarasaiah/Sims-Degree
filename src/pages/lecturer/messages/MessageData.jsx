// MessageData.jsx

const mockUsers = [
  // lecturer
  { id: 'F001', name: 'Dr. Sarah Davis', type: 'lecturer' },
  { id: 'F002', name: 'Prof. Michael Evans', type: 'lecturer' },
  { id: 'F003', name: 'Dr. Jennifer Frank', type: 'lecturer' },
  { id: 'F004', name: 'Prof. Robert Wilson', type: 'lecturer' },
  { id: 'F005', name: 'Dr. Lisa Thompson', type: 'lecturer' },

  // Students
  { id: '2023CSC001', name: 'Alice Brown', type: 'Student' },
  { id: '2023PHY002', name: 'Bob Green', type: 'Student' },
  { id: '2023CHE003', name: 'Charlie White', type: 'Student' },
  { id: '2023MAT004', name: 'Diana Prince', type: 'Student' },
  { id: '2023COM005', name: 'Emma Wilson', type: 'Student' },
  { id: '2023ENG006', name: 'James Miller', type: 'Student' },
  { id: '2023HIS007', name: 'Sophia Davis', type: 'Student' },
  { id: '2023STA008', name: 'Oliver Johnson', type: 'Student' },

  // Parents
  { id: 'P201', name: 'Emily Clark (Parent of 2023CSC001)', type: 'Parent' },
  { id: 'P202', name: 'George Harris (Parent of 2023PHY002)', type: 'Parent' },
  { id: 'P203', name: 'Fiona Adams (Parent of 2023CHE003)', type: 'Parent' },
  { id: 'P204', name: 'David Prince (Parent of 2023MAT004)', type: 'Parent' },
  { id: 'P205', name: 'Maria Wilson (Parent of 2023COM005)', type: 'Parent' },
];

/**
 * Simulates fetching users based on a search query (ID or name).
 * Filters by 'lecturer', 'Student', or 'Parent' types.
 *
 * @param {string} query The search string.
 * @returns {Array} An array of user objects matching the query.
 */
export const fetchUsers = (query) => {
  if (!query) {
    // In a real app, you might return recently contacted users or a small sample.
    // For this mock, return a mix of types for initial suggestions.
    return mockUsers.filter(user => ['F001', '2023CSC001', 'P201'].includes(user.id));
  }
  const lowerCaseQuery = query.toLowerCase();
  return mockUsers.filter(user =>
    (user.id.toLowerCase().includes(lowerCaseQuery) ||
     user.name.toLowerCase().includes(lowerCaseQuery)) &&
    (user.type === 'lecturer' || user.type === 'Student' || user.type === 'Parent')
  );
};

/**
 * Simulates fetching a single user by their ID.
 *
 * @param {string} id The user ID to look up.
 * @returns {object|null} The user object if found, otherwise null.
 */
export const fetchUserById = (id) => {
  return mockUsers.find(user => user.id === id) || null;
};

export default mockUsers;