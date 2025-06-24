%{
#include "output.tab.h"
void yyerror(const char *s);
%}

%%

"for"           { return FOR; }
"{"             { return LBRACE; }
"}"             { return RBRACE; }
"("             { return LPAREN; }
")"             { return RPAREN; }
";"             { return SEMICOLON; }
"="             { return EQUALS; }
"<="            { return LE; }
">="            { return GE; }
"<"             { return LT; }
">"             { return GT; }
"+"             { return PLUS; }

[a-zA-Z_][a-zA-Z0-9_]*    { return IDENTIFIER; }
[0-9]+                   { return NUMBER; }

[ \t\n\r]+               { /* Ignore whitespace */ }

.                        { yyerror("Invalid character"); }

%%
