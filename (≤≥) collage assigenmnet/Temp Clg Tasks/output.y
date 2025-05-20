%{
#include <stdio.h>
#include <stdlib.h>

void yyerror(const char *s);
int yylex(void);
%}

%token FOR
%token IDENTIFIER
%token NUMBER
%token SEMICOLON
%token LPAREN RPAREN LBRACE RBRACE
%token EQUALS
%token LT GT LE GE
%token PLUS

%%

program:
    statements
    ;

statements:
    statement
    | statements statement
    ;

statement:
    for_loop
    | other_statement
    ;

for_loop:
    FOR LPAREN for_init SEMICOLON for_condition SEMICOLON for_increment RPAREN
    LBRACE statements RBRACE
    {
        printf("Valid for loop syntax\n");
        printf("good\n");
    }
    ;

for_init:
    IDENTIFIER EQUALS NUMBER
    ;

for_condition:
    IDENTIFIER LT NUMBER
    | IDENTIFIER GT NUMBER
    | IDENTIFIER LE NUMBER
    | IDENTIFIER GE NUMBER
    ;

for_increment:
    IDENTIFIER EQUALS IDENTIFIER PLUS NUMBER
    ;

other_statement:
    IDENTIFIER EQUALS NUMBER SEMICOLON
    ;

%%

void yyerror(const char *s)
{
    fprintf(stderr, "Syntax error: %s\n", s);
}

int main(void)
{
    printf("Enter a C program with a for loop:\n");
    if (yyparse() == 0)
    {
        printf("good\n");
    }
    return 0;
}
