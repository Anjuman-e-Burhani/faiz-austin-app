/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItemo = /* GraphQL */ `
  query GetItemo($id: ID!) {
    getItemo(id: $id) {
      id
      name
      description
      isVeg
      createdAt
      updatedAt
    }
  }
`;
export const listItemos = /* GraphQL */ `
  query ListItemos(
    $filter: ModelItemoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isVeg
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
