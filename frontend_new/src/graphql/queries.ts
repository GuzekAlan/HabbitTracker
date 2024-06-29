import { gql } from "@apollo/client";

export const GET_HABITS = gql`
  {
    habits {
      id
      name
      difficulty
      color
    }
  }
`;

export const GET_USER_HABITS = gql`
  query userHabits($userId: ID!) {
    userHabits(userId: $userId) {
      id
      habit {
        id
        name
        difficulty
        color
      }
      records {
        date
        id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  query authToken($login: String!, $password: String!) {
    authToken(login: $login, password: $password)
  }
`;
