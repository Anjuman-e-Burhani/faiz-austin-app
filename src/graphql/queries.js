/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
      id
      name
      description
      isVeg
      image
      createdAt
      updatedAt
    }
  }
`;
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isVeg
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCook = /* GraphQL */ `
  query GetCook($id: ID!) {
    getCook(id: $id) {
      id
      name
      contact
      address
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listCooks = /* GraphQL */ `
  query ListCooks(
    $filter: ModelCookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact
        address
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
