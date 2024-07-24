/**
 * 부모 클래스인지 확인한다.
 *
 * @param parentClass 부모 클래스
 * @param childClass 자식 클래스
 * @return 부모 클래스 여부
 * */
const isParentClass = (parentClass: Function, childClass: Function) => {
    let prototype = childClass.prototype;
    while (prototype) {
        if (prototype === parentClass.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }
    return false;
};

export default isParentClass;