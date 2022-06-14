/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
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
export const onCreateCook = /* GraphQL */ `
  subscription OnCreateCook {
    onCreateCook {
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
export const onUpdateCook = /* GraphQL */ `
  subscription OnUpdateCook {
    onUpdateCook {
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
export const onDeleteCook = /* GraphQL */ `
  subscription OnDeleteCook {
    onDeleteCook {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
    }
  }
`;
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
    }
  }
`;
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
    }
  }
`;
