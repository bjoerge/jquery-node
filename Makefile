update:
	curl http://code.jquery.com/jquery.js > lib/jquery-latest.js
	
build:
	@(cat extra/prelude.js lib/jquery-latest.js extra/postlude.js > jquery.js)
	@du -h jquery.js

clean:
	@rm jquery.js
		
.PHONY:	build test clean
