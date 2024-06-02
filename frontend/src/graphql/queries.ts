import { gql } from '@apollo/client';

export const GET_HABITS = gql`
  query GetHabits {
    habits {
      id
      name
      color
      completed
    }
  }
`;
