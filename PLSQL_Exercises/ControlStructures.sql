DECLARE
    CURSOR c_customers IS
        SELECT customer_id, age FROM Customers WHERE age > 60;
BEGIN
    FOR cust IN c_customers LOOP
        UPDATE Loans
        SET interest_rate = interest_rate - 1
        WHERE customer_id = cust.customer_id;
    END LOOP;
    COMMIT;
END;
/

DECLARE
    CURSOR c_customers IS
        SELECT customer_id, balance FROM Customers WHERE balance > 10000;
BEGIN
    FOR cust IN c_customers LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE customer_id = cust.customer_id;
    END LOOP;
    COMMIT;
END;
/

DECLARE
    CURSOR c_loans IS
        SELECT customer_id, loan_id, due_date 
        FROM Loans 
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || loan.customer_id || ', your loan ' || loan.loan_id || ' is due on ' || loan.due_date);
    END LOOP;
END;
/
