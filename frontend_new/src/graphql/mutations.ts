import { gql } from "@apollo/client";

export const CREATE_HABIT = gql`
  mutation CreateHabit($color: String!, $name: String!, $difficulty: Int!) {
    createHabit(color: $color, difficulty: $difficulty, name: $name) {
      id
    }
  }
`;

export const CREATE_USER_HABIT = gql`
  mutation CreateUserHabit($habitId: ID!, $userId: ID!) {
    createUserHabit(userId: $userId, habitId: $habitId) {
      id
    }
  }
`;

export const CREATE_RECORD = gql`
  mutation CreateRecord($date: String!, $userHabitId: ID!) {
    createRecord(date: $date, userHabitId: $userHabitId) {
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($login: String!, $password: String!) {
    createUser(login: $login, password: $password) {
      id
    }
  }
`;

export const DELETE_USER_HABIT = gql`
  mutation DeleteUserHabit($id: ID!) {
    deleteUserHabit(id: $id)
  }
`;

export const DELETE_RECORD = gql`
  mutation DeleteRecord($id: ID!) {
    deleteRecord(id: $id)
  }
`;
