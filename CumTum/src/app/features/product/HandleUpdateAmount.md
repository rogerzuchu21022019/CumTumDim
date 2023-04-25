`Step1`

`Step 1.1 : find index in array of mainDishes`

```
=> tìm vị trí của phần tử đó trong mảng mainDishes
```

```
const indexOfMainDishInArray = state.mainDishes.findIndex(
        item => item._id === _id,
      );

log.info(
        '🚀 ~ file: sliceProduct.js:188 ~ indexOfMainDishInArray find by Index in array mainDishes:',
        indexOfMainDishInArray,
      );
```

`Step 1.2:
find item in array of mainDishCart to get amount.`

```
=> Tìm item trong mảng mainDishCart để lấy số lượng amount của item
```

```
const itemMainDishCart = state.mainDishCart.find(
        item => item._id === _id,
);

log.info(
        '🚀 ~ file: sliceProduct.js:192 ~ itemMainDishCart find by id in array mainDishCart:',
        itemMainDishCart,
);
```

`Step2`

`Step 2.1 : if index != 1 => array have item and this index is index of array mainDishes`

```
=> nếu vị trí !== 1 nghĩa là mảng đó có phần tử đó và index đó chính là vị trí của phần tử đó trong mảng mainDishes
```

`Step 2.2:
if index === -1 => array don't have item `

```
=> nếu vị trí === -1 nghĩa là mảng đó không có phần tử đó
```

`Step 2.3 :
Because in mainDishes and in mainDishCart have a one point common is a item and index find by _id`

```
=> Vì trong mainDishes và trong mainDishCart đều có một điểm chung là  item và index tìm theo _id => tính chất bắc cầu
```

`Step 2.4 :`

- So if boths indexOfMainDishInArray and itemMainDishCart can use to update amount.
- We will get amount in a itemMainDishCart and update for array mainDishes with index of array which we found`

- Vì cả 2 indexOfMainDishInArray và itemMainDishCart đều có thể được sử dụng để cập nhật số lượng.
- Chúng ta sẽ lấy số lượng trong một itemMainDishCart và cập nhật cho mảng mainDishes với chỉ mục của mảng mà chúng ta đã tìm thấy trước đó

`Step 2.5 :`

- To do that we must use if condition to check itemMainDishCart != null and indexOfMainDishInArray !== -1
- Để làm điều đó, chúng ta phải sử dụng điều kiện if để kiểm tra itemMainDishCart != null và indexOfMainDishInArray! == -1

`Step 2.6 :`

- if both condition is true => we can update amount for array mainDishes
- Nếu cả hai điều kiện đều đúng => chúng ta có thể cập nhật số lượng cho mảng mainDishes
- else: check if itemMainDishCart === null or itemMainDishCart === undefined because remove case will not show any item in array
- because in the remove case, we filter and create a new array show all item not include this \_id which we remove => set state.mainDishes[indexOfMainDishInArray].amount = 0;
- else: kiểm tra nếu itemMainDishCart === null hoặc itemMainDishCart === undefined vì trường hợp xóa sẽ không hiển thị bất kỳ mục nào trong mảng
- vì trong trường hợp xóa, chúng ta lọc và tạo một mảng mới hiển thị tất cả các mục không bao gồm \_id này mà chúng ta đã xóa => state.mainDishes[indexOfMainDishInArray].amount = 0;

```
if (itemMainDishCart != null && indexOfMainDishInArray !== -1) {
        state.mainDishes[indexOfMainDishInArray].amount =
          itemMainDishCart.amount;
        log.info(
          '🚀 ~ file: sliceProduct.js:217 ~ update amount success for state.mainDishes[indexOfMainDishInArray].amount',
          state.mainDishes[indexOfMainDishInArray].amount,
        );
      } else if (itemMainDishCart === null || itemMainDishCart === undefined) {
        log.info(
          '🚀 ~ file: sliceProduct.js:225 ~ update amount success for state.mainDishes[indexOfMainDishInArray].amount when itemMainDishCart not found',
          state.mainDishes[indexOfMainDishInArray].amount,
        );
        state.mainDishes[indexOfMainDishInArray].amount = 0;
      }
```

`Step 3:`

- Làm tương tự cho index