angular.module("listaTelefonica").directive("uiDate", function () {
    return {
        required: "ngModel",
        link: function (scope, element, attrs, ctrl) {

            var _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + data.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + data.substring(5,8);
                }
                return date;
            }
            console.log(scope);
            console.log(element);
            console.log(attrs);
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

        }
    };
});