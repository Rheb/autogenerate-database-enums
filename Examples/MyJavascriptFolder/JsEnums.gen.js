/*----------------------------------------------------------------------*/ /* eslint-disable */ /*
 * This is an auto-generated js-file
 * To update from db, use: npm run dblookup
 * Available utility functions for lookupObjects are:
 *   .getKeyName(id)
 *   .getDisplayName(id)
 *   .toList()
 *----------------------------------------------------------------------------------------------*/

// #region AssignmentStatusType (Table: dbo.AssignmentStatus)

export const AssignmentStatusType = {
  Competed: 1, // Assignment has been successfully completed
  DiscardedSafe: 2, // Assignment has been discarded
  AwatingReview: 3, // Assignment is awaiting review
  RequreReviewIMMEDIATELY: 4, // Possible error has occurred: Carfully review the assignment as soon as possible!
  // Note: these template utility functions are overwritten with correct functionality
  getKeyName: (id) => id.toString(),
  getDisplayName: (id) => id.toString(),
  toList: () => [],
};

// #endregion

// #region TextType (Table: dbo.FormTextType)

export const TextType = {
  Comment: 1, // Comment
  StreetAddress: 2, // Street address
  FreeText: 3, // Other notes or specifications
  // Note: these template utility functions are overwritten with correct functionality
  getKeyName: (id) => id.toString(),
  getDisplayName: (id) => id.toString(),
  toList: () => [],
};

// #endregion

// #region LookupObejcts - Private Utilities

const AssignmentStatusTypeUtils = {
  1: {
    keyName: 'Competed',
    displayName: 'Assignment has been successfully completed',
  },
  2: {
    keyName: 'DiscardedSafe',
    displayName: 'Assignment has been discarded',
  },
  3: {
    keyName: 'AwatingReview',
    displayName: 'Assignment is awaiting review',
  },
  4: {
    keyName: 'RequreReviewIMMEDIATELY',
    displayName: 'Possible error has occurred: Carfully review the assignment as soon as possible!',
  },
};
const TextTypeUtils = {
  1: {
    keyName: 'Comment',
    displayName: 'Comment',
  },
  2: {
    keyName: 'StreetAddress',
    displayName: 'Street address',
  },
  3: {
    keyName: 'FreeText',
    displayName: 'Other notes or specifications',
  },
};

// #endregion

// #region LookupObejcts - Utility Function Overrides

const AssignmentStatusTypeIDs = [1, 2, 3, 4];
Object.defineProperty(AssignmentStatusType, 'getKeyName', {
  value: (id) => AssignmentStatusTypeUtils[id].keyName,
  writable: false,
});
Object.defineProperty(AssignmentStatusType, 'getDisplayName', {
  value: (id) => AssignmentStatusTypeUtils[id].displayName,
  writable: false,
});
Object.defineProperty(AssignmentStatusType, 'toList', {
  value: () => AssignmentStatusTypeIDs,
  writable: false,
});

const TextTypeIDs = [1, 2, 3];
Object.defineProperty(TextType, 'getKeyName', {
  value: (id) => TextTypeUtils[id].keyName,
  writable: false,
});
Object.defineProperty(TextType, 'getDisplayName', {
  value: (id) => TextTypeUtils[id].displayName,
  writable: false,
});
Object.defineProperty(TextType, 'toList', {
  value: () => TextTypeIDs,
  writable: false,
});

// #endregion