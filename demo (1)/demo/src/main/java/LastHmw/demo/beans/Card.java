package LastHmw.demo.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Card {
	
	@Id
	@GeneratedValue
	private int id;
	private String title;
	
	@Column(length = 10000)
	private String body;
	private int priority;
	private boolean readFlag=false;
	public Card() {
		super();
	}
	public Card(String title, String body, int priority, boolean readFlag) {
		super();
		this.title = title;
		this.body = body;
		this.readFlag = readFlag;
		this.priority = priority;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public boolean isReadFlag() {
		return readFlag;
	}
	public void setReadFlag(boolean readFlag) {
		this.readFlag = readFlag;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	public int getId() {
		return id;
	}
	
	
	
}
