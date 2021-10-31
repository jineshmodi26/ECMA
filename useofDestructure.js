const obj = {
    a: [ 'a1', 'a2', 'a3' ],
    b: [ 'b1', 'b2', 'b3' ],
    c: [ 'c1', 'c2', 'c3' ],
    d: [ 'd1', 'd2', 'd3' ],
    e: [ 'e1', 'e2', 'e3' ]
    };
    const{
    a: [
    bItem1,
    bItem2
    ],
    d: [
    dItem1, // 'd1'
    ...dRemainingItemsArr // [ 'd2', 'd3 ]
    ],
    ...restAttributesObj
    }=obj;
    // console.log(bItem1); // 'b1'
    // console.log(bItem2); // 'b2'
    // console.log(dItem1); // 'd1'
    console.log(dRemainingItemsArr);
    console.log(restAttributesObj);