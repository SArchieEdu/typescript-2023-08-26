var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import "reflect-metadata";
class Calculator {
    sum() {
        // ...
    }
    calculate() {
        //logic
    }
    getResult() { }
}
__decorate([
    LogTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "sum", null);
__decorate([
    LogTime(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "calculate", null);
__decorate([
    LogTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "getResult", null);
function LogTime(isDevOnly = true) {
    return (target, propertyName, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.time(propertyName);
            const result = originalMethod.apply(this, ...args);
            console.timeEnd(propertyName);
            return result;
        };
    };
}
class UserService {
}
