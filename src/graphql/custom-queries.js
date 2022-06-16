export const listUnpublishedMenus = `
  query ListMenus(
    $isPublished: Boolean
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(isPublished: false, filter: $filter, limit: $limit, nextToken: $nextToken) {
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