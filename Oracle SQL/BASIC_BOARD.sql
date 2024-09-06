CREATE TABLE BOARD_TBL(
    BOARD_NO        NUMBER          PRIMARY KEY,
    BOARD_TITLE     VARCHAR2(1000)  NOT NULL,
    BOARD_WRITTER   VARCHAR2(300)   NOT NULL,
    BOARD_SDT       DATE            NOT NULL
);
CREATE SEQUENCE BOARD_TBL_SEQ;

SELECT * FROM BOARD_TBL;