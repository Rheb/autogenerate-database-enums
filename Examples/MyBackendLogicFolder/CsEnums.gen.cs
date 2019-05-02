using System.CodeDom.Compiler;

namespace Business.DatabaseEnums
{
    #region AssignmentStatusType (Table: dbo.AssignmentStatus)

    /// <summary>
    /// Auto generated enum from table: dbo.AssignmentStatus |
    /// To update enum from DB, use: npm run dblookup
    /// </summary>
    [GeneratedCode("TextTemplatingFileGenerator", "10")]
    public enum AssignmentStatusType
    {
        /// <summary>
        /// DisplaName: Assignment has been successfully completed
        /// </summary>
        Competed = 1,

        /// <summary>
        /// DisplaName: Assignment has been discarded
        /// </summary>
        DiscardedSafe = 2,

        /// <summary>
        /// DisplaName: Assignment is awaiting review
        /// </summary>
        AwatingReview = 3,

        /// <summary>
        /// DisplaName: Possible error has occurred: Carfully review the assignment as soon as possible!
        /// </summary>
        RequreReviewIMMEDIATELY = 4
    }

    #endregion

    #region TextType (Table: dbo.FormTextType)

    /// <summary>
    /// Auto generated enum from table: dbo.FormTextType |
    /// To update enum from DB, use: npm run dblookup
    /// </summary>
    [GeneratedCode("TextTemplatingFileGenerator", "10")]
    public enum TextType
    {
        /// <summary>
        /// DisplaName: Comment
        /// </summary>
        Comment = 1,

        /// <summary>
        /// DisplaName: Street address
        /// </summary>
        StreetAddress = 2,

        /// <summary>
        /// DisplaName: Other notes or specifications
        /// </summary>
        FreeText = 3
    }

    #endregion

    #region Extension Methods

    /// <summary>
    /// Extension Methods for auto generated enums from DB
    /// </summary>
    [GeneratedCode("TextTemplatingFileGenerator", "10")]
    public static class GeneratedEnumExtensions
    {
        public static string GetDisplayName(this AssignmentStatusType p_eKey)
        {
            switch (p_eKey)
            {
                case AssignmentStatusType.Competed:
                    return "Assignment has been successfully completed";
                case AssignmentStatusType.DiscardedSafe:
                    return "Assignment has been discarded";
                case AssignmentStatusType.AwatingReview:
                    return "Assignment is awaiting review";
                case AssignmentStatusType.RequreReviewIMMEDIATELY:
                    return "Possible error has occurred: Carfully review the assignment as soon as possible!";
            }
            return "";
        }

        public static string GetDisplayName(this TextType p_eKey)
        {
            switch (p_eKey)
            {
                case TextType.Comment:
                    return "Comment";
                case TextType.StreetAddress:
                    return "Street address";
                case TextType.FreeText:
                    return "Other notes or specifications";
            }
            return "";
        }
    }

    #endregion
}