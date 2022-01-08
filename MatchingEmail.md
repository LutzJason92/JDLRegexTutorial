# JDLRegexTutorial - Matching a URL


By the end of this tutorial the reader will have a better understanding of the different components of REGular EXpressions or Regex. The syntax of regular expressions varies between different computer languages. In this Tutorial, we will review how this REGEX is used for Matching a URL with a JavaScript Engine. Within the sections below, I outline various elements of Regular expressions and provide examples of thier syntax nested with two semicolons 
    (ie - Element: example :Explanation)

## Summary

The Sections below disect the following Regular Expression: 

### with HTTP

/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/


<!-- /^ https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*) *\/?$/

### without HTTP 
[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*) -->


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components
  

### Anchors

    Anchors match a position before, after or between characters.
         This includes the following symbols:
           - : ^ :A Caret Matches the beginning of input string. 
           - : $ :A Dollar sign Matches the end of input string. 
           - : \b :Matches a word boundary.
           - : \B :Matches a non-word boundary.

    In our expression defined above, you'll notice /^ at the beginning of the string and $/ at the end of the string.

### Quantifiers

    Quantifiers match a number of instances of a character, group, or character class in a string.
        This includes the following symbols and syntax:
            - : {n} :When appended to a character or character class, it specifies how many characters or character classes you want to match.
            - : {n,m} or {n,} :The range matches a character or character class from n to m times. The m is optional to dictate n or more times.

        Shorthand Examples for Quantifiers:
            - : + :is shorthand for {1,} which means 1 or more.
            - : ? :is short {0,1} and means zero or one.
            - : * :is shorthand for {0,} and means zero or more.

    In our expression defined above, you'll notice {2,6} appended to the BRACKET NOTATION? [a-z\.] which determines a range of two to six lowercase alphabetical (a-z) charcters.

/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
### Grouping Constructs

    Grouping Constructs let you extract a subset of information from a token or text.
        This incudes the following symbols and syntax:
            - Matched Subexpressions: (subexpr) :Captures the information that matches the subexpression in paranthese.
            - Non-Capturing Matched Subexpressions: (?:subexpr) :Groups the contained expression together but does not capture the substring that is matched by the subexpression.
            - Named Matched Subexpressions: (?<name>subexpression) :the name of or group characters you wish to capture 
            - Balancing Group Definitions: (?<name1-name2>subexpr) :A balancing group definition deletes the definition of a previously defined group and stores, in the current group, the interval between the previously defined group and the current group.
            
            - Back References 

    In our expression defined above, you'll notice numerious groups. Such as:
        (https?:\/\/)
        ([\da-z\.-]+)
        ([\/\w \.-]*)

### Character Classes

    Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits.
        This incudes the following symbols and syntax:
            -: . :Matches any single special character unless it is inside a chacterclass, the dot loses special meaning and is interpreted as a literal dot
            -: \d :Matches any digit
            -: \D :Matches and character that is not a digit
            -: \w :Matches any alphanumeric charcter from the basical latin alphabet including the underscore.
            -: \W :Matches any character that is not a word character from the basic Latin alphabet.
            -: \s :Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.
            -: \S :Matches a single character other than white space.
            -: \t :Matches a horizontal tab.
            -: \r :Matches a carriage return.
            -: \n :Matches a linefeed.
            -: \v :Matches a vertical tab.
            -: \f :Matches a formfeed.
            -: [\b] :Matches a backspace.
            -: \0 :Matches a NUL character. Do not follow this with another digit.

    In our expression defined above, you'll notice numerious Character classes:
                here: \da-z\  
                here: \/\w \.
            and here: a-z\.

### Bracket Expressions

    Bracket expressions extend Character Classes. Bracket Expressions match one character, out of a set of characters, like regular classes. A Bracket Expression (an expression enclosed in square brackets, "[]" ) is an Regular Expression that shall match a specific set of single characters, and may match a specific set of multi-character collating elements, based on the non-empty set of list expressions contained in the bracket expression.
        The following rules apply to Bracket Expressions:
        
        
        Notice below we have numerous Bracket Expressions with in our RegEx:
            [\/\w \.-]
            [a-z\.]
            [\da-z\.-]

 

### The OR Operator

    Alternation is the term in regular expression that is actually a simple “OR”. In a regular expression it is denoted with a vertical line character: | :. Square brackets allow only characters or character classes. Alternation allows any expressions. A regexp A|B|C means one of expressions A, B or C. For instance:

        gr(a|e)y means exactly the same as gr[ae]y.
        gra|ey means gra or ey.



### Flags

    Flags, in a regular expression, are tokens that modify its behavior of searching.
        these include the following symbols and syntax:
            : i :Ignore Casing, Makes the expression search case-insensitively.
            : g :Global	Makes, the expression search for all occurences.
            : s	:Dot All, Makes the wild character . match newlines as well.
            : m	:Multiline,	Makes the boundary characters ^ and $ match the beginning and ending of every single line instead of the beginning and ending of the whole string.
            : y	:Sticky	Makes the expression start its searching from the index indicated in its lastIndex property.
            : u	:Unicode, Makes the expression assume individual characters as code points, not code units, and thus match 32-bit characters as well.

### Character Escapes

    Escape characters are characters that can be interpreted in some alternate way then what we intended to. To print these characters as it is, include backslash ‘\’ in front of them.        
    
        Following are the escape characters in JavaScript:
           : \b	:Backspace
           : \f	:Form Feed
           : \n	:New Line
           : \r	:Carriage Return
           : \t	:Horizontal Tabulator
           : \v	:Vertical Tabulator
           : \'	:Single quote
           : \"	:Double quote
           : \\	:Backslash

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
Resources:
https://docs.microsoft.com/en-us/dotnet/standard/base-types/grouping-constructs-in-regular-expressions#balancing_group_definition

https://www.codeguage.com/courses/regexp/flags