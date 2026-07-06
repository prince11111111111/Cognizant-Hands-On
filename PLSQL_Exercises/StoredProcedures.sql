CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET balance = balance * 1.01
    WHERE account_type = 'Savings';
    COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(p_department_id IN NUMBER, p_bonus_percentage IN NUMBER) IS
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * (p_bonus_percentage / 100))
    WHERE department_id = p_department_id;
    COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE TransferFunds(p_source_account IN NUMBER, p_target_account IN NUMBER, p_amount IN NUMBER) IS
    v_balance NUMBER;
BEGIN
    SELECT balance INTO v_balance FROM Accounts WHERE account_id = p_source_account;
    
    IF v_balance >= p_amount THEN
        UPDATE Accounts SET balance = balance - p_amount WHERE account_id = p_source_account;
        UPDATE Accounts SET balance = balance + p_amount WHERE account_id = p_target_account;
        COMMIT;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in the source account.');
    END IF;
END;
/
