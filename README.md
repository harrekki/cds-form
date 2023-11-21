# CDS Form
A simple web form to register for an event.

## Technologies Used:
* Parcel (build)
* Bootstrap (with Sass for customization)
* Vanilla JavaScript
* HTML, CSS

## Validation
Form validation is handled with HTML form input attributes, such as `maxlength` and `pattern`, Bootstrap custom validation messages, and JavaScript event handlers to show content.  Certain fields that are required based on input in another field ('How did you hear about us?') are dynamically adjusted by adding the `required` class.

## Styles
Bootstrap classes are used for most of the styling, with the addition of a helper class (`required`) to indicate required fields.  Sass variables and maps were used to customize text styles to meet specifications.

## Issues
I find Bootstrap styles hard to reign in sometimes, so I had trouble getting certain elements to center (terms and conditions checkbox) and aligning error messages (also terms and conditions).  I also need to learn more regexp to refine some of the validation.  It all works as needed, but could be better!

