import { gql } from "@apollo/client";


export const CREATE_HABIT = gql`
  mutation($color: String!, $name: String!, $difficulty: Int!){
    createHabit(color: $color, difficulty: $difficulty, name: $name) {
      id
    }
  }
`;