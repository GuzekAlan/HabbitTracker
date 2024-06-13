import { gql } from '@apollo/client';

export const GET_HABITS = gql`
  query HabitRecords($userId: ID!, $habitId: ID!, $from: String!, $to: String!){
    habitRecords(userId: $userId, habitId: $habitId, dateFrom: $from, dateTo: $to){
      habit{
        name
        color
        difficulty
      }
      date
    }
  }
`;

export const GET_USER_HABITS = gql`
  query UserHabits($userId: ID!) {
    userHabits(userId: $userId) {
      id
      name
      difficulty
      color
      habitRecords{
        date
      }
    }
  }
`;
