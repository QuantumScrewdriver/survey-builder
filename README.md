# survey-builder

# Usage

When the app is initialized, users use the 'Choose what element to add next' element to add a new element of a chosen data entry type. This element can be deleted at any time. From there, they make edits to the survey as they go, and at the end, use the 'Submit' button to send a JSON file to the central API.

# Coding Basics

There are currently three basic components in the app:

**TabList.jsx**

This is highest-level component for this app that is directly impacted by our code. It contains the TabBuilder component and any specific construction components that are added. It also handles converting all the survey data to JSON, making sure that all the data is valid (i.e., making sure that all boxes are filled, making sure that ranges have number values, etc.), and sending the data to the API through axios.

**TabBuilder.jsx**

Permanent component in TabList, handles creation of new components that serve as different parts of the experiment. Note: the contructor function is passed down from TabList to TabBuilder and is bound to TabList.

**SliderTab.jsx**

Currently, hard-coded format for questions that call on the respondent to enter data on a slider. Allows for a question to be entered and a minimum and maximum value. Includes a deletion button inherited from Tab List.

NOTE: might be worth creating an overall constructor for question formats so that we don't have to repeatedly hard-code consistent elements like delete button.
