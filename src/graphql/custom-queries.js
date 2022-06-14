export const listDishes = `
  query ListUnplublishedPlans(
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