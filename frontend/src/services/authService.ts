export interface User {
    id: number;
    email: string;
    password: string;
  }
  
  const users: User[] = [
    { id: 1, email: 'test@example.com', password: 'password' },
  ];
  
  export const login = (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  };
  
  export const register = (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      if (users.find(user => user.email === email)) {
        reject(new Error('User already exists'));
      } else {
        const newUser: User = { id: users.length + 1, email, password };
        users.push(newUser);
        resolve(newUser);
      }
    });
  };