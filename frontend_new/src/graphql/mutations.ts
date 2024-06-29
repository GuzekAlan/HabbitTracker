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

export const CREATE_USER = gql`
  mutation CreateUser($login: String!, $password: String!) {
    createUser(login: $login, password: $password) {
      id
    }
  }
`;
