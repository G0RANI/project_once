package once;

public class Q {
	public static void main(String[] args) {
		for(int i=0;i<60;i++) {
			for(int j=0;j<60;j++) {
				System.out.format("INSERT INTO ONCE(date, price) VALUES('2019-04-30 00:%d:%d', '%d');\n",i,j,1000);
			}			
		}
	}
}
