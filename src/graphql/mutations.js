/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItemo(
    $input: CreateItemoInput!
    $condition: ModelItemoConditionInput
  ) {
    createItemo(input: $input, condition: $condition) {
      id
      name
      description
      isVeg
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItemo(
    $input: UpdateItemoInput!
    $condition: ModelItemoConditionInput
  ) {
    updateItemo(input: $input, condition: $condition) {
      id
      name
      description
      isVeg
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItemo(
    $input: DeleteItemoInput!
    $condition: ModelItemoConditionInput
  ) {
    deleteItemo(input: $input, condition: $condition) {
      id
      name
      description
      isVeg
      createdAt
      updatedAt
    }
  }
`;
