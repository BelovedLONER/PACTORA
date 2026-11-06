// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {Escrow} from "Escrow.sol";

contract EscrowTest is Test {
    address owner = address(0x123);
    address buyer = address(0x456);
    address seller = address(0x789);

    address usdc;
    Escrow escrow;

    function setUp() public {
        vm.startPrank(owner);
        escrow = new Escrow();
        // Use a dummy token address; the real token contract is not deployed in this unit test.
        usdc = address(0x1111);
        escrow.addSupportedToken(usdc);
        vm.stopPrank();
    }

    function test_create_and_accept() public {
        uint256 deadline = block.timestamp + 10 days;
        vm.startPrank(buyer);
        uint256 id = escrow.createAgreement(buyer, seller, usdc, 1_000_000, deadline, "Test", "desc", "terms");
        vm.stopPrank();

        (,,,,,,,,,,,, uint8 status,,,,,,,,,,,) = escrow.getAgreement(id);
        assertEq(status, uint8(0)); // Draft

        vm.startPrank(seller);
        escrow.acceptAgreement(id);
        vm.stopPrank();

        (,,,,,,,,,,,, status,,,,,,,,,,,) = escrow.getAgreement(id);
        assertEq(status, uint8(0)); // still Draft (only seller accepted)

        vm.startPrank(buyer);
        escrow.acceptAgreement(id);
        vm.stopPrank();

        (,,,,,,,,,,,, status,,,,,,,,,,,) = escrow.getAgreement(id);
        assertEq(status, uint8(2)); // Accepted
    }

    function test_cancel_before_funding() public {
        uint256 deadline = block.timestamp + 10 days;
        vm.startPrank(buyer);
        uint256 id = escrow.createAgreement(buyer, seller, usdc, 1_000_000, deadline, "Test", "desc", "terms");
        escrow.acceptAgreement(id);
        vm.stopPrank();

        vm.startPrank(seller);
        escrow.acceptAgreement(id);
        vm.stopPrank();

        vm.startPrank(buyer);
        escrow.cancelBeforeFunding(id);
        vm.stopPrank();

        (,,,,,,,,,,,, uint8 status,,,,,,,,,,,) = escrow.getAgreement(id);
        assertEq(status, uint8(2)); // still Accepted until both cancel
    }
}
