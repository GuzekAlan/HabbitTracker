import { gql } from "@apollo/client";

export const GET_HABITS = gql`
  query habits() {
   id
  }
`;

export const GET_USER_HABITS = gql`
  query userHabits($userId: ID!) {
    userHabits(userId: $userId) {
      habit {
        id
        name
        difficulty
        color
      }
      records {
        date
      }
    }
  }
`;

export const LOGIN_USER = gql`
  query authToken($login: String!, $password: String!) {
    authToken(login: $login, password: $password) {
      id
    }
  }
`;
