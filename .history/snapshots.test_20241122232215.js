const itemStock = [
    {'Id': '1', 'ItemName': 'Razors', 'Stock': 10},
    {'Id': '2', 'ItemName': 'Shaving Cream', 'Stock': 20},
    {'Id': '3', 'ItemName': 'Shaving Brush', 'Stock': 30},
    {'Id': '4', 'ItemName': 'Shaving Blade', 'Stock': 40},
    {'Id': '5', 'ItemName': 'Shaving Trimmer', 'Stock': 50},
    {'Id': '6', 'ItemName': 'Razors', 'Stock': 60},
]

function filterItemStock(arr, key, term) {
    return arr.filter(item => item[key] === term);
}

test('it returns all items with matching Id', () => {
    expect(filterItemStock(itemStock, 'Id', '1')).toEqual([{'Id': '1', 'ItemName': 'Razors', 'Stock': 10}]);
})