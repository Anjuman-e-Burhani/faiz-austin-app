/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
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
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
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
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
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
export const createCook = /* GraphQL */ `
  mutation CreateCook(
    $input: CreateCookInput!
    $condition: ModelCookConditionInput
  ) {
    createCook(input: $input, condition: $condition) {
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
export const updateCook = /* GraphQL */ `
  mutation UpdateCook(
    $input: UpdateCookInput!
    $condition: ModelCookConditionInput
  ) {
    updateCook(input: $input, condition: $condition) {
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
export const deleteCook = /* GraphQL */ `
  mutation DeleteCook(
    $input: DeleteCookInput!
    $condition: ModelCookConditionInput
  ) {
    deleteCook(input: $input, condition: $condition) {
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
