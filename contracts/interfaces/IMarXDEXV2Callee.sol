pragma solidity >=0.5.0;

interface IMarXDEXV2Callee {
    function marXDEXV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
