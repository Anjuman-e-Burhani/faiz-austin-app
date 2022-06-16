/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
      id
      name
      category
      description
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
        category
        description
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
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      serveOn
      pickupOn
      dish {
        id
        name
        category
        description
        image
        createdAt
        updatedAt
      }
      cook {
        id
        name
        contact
        address
        isActive
        createdAt
        updatedAt
      }
      isActive
      isPublished
      createdAt
      updatedAt
      menuDishId
      menuCookId
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        serveOn
        pickupOn
        dish {
          id
          name
          category
          description
          image
          createdAt
          updatedAt
        }
        cook {
          id
          name
          contact
          address
          isActive
          createdAt
          updatedAt
        }
        isActive
        isPublished
        createdAt
        updatedAt
        menuDishId
        menuCookId
      }
      nextToken
    }
  }
`;
