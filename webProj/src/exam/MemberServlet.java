package exam;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.DBCon;

@WebServlet("/memberServlet")
public class MemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public MemberServlet() {
        super();
      
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		
		Connection conn = DBCon.getConnect();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		
		String sql = "select * from user_temp";
		String json = "[";
		try {
			psmt = conn.prepareStatement(sql, ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
			rs = psmt.executeQuery(); 

			while (rs.next()) {
				String memId = rs.getString(1); 
				String memName = rs.getString(2);
				String memPw = rs.getString(3);
				String memTel = rs.getString(4);
				String memGen = rs.getString(5);

				json += "{\"사용ID\":\"" + memId + "\",\"name\":\"" + memName + "\",\"password\":" + memPw + "\",\"연락처\":" + memTel +"\",\"성별\":" + memGen +"}";
				if (!rs.isLast())
					json += ",";
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			if (psmt != null)
				try {
					psmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			if (conn != null)
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
		}

		json += "]";

		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String p1 = request.getParameter("user_id");
		String p2 = request.getParameter("user_name");
		String p3 = request.getParameter("user_pass");
		String p4 = request.getParameter("user_phone");
		String p5 = request.getParameter("user_gender");

		PreparedStatement psmt = null;
		Connection conn = DBCon.getConnect();

		String sql = "insert into user_temp values(?,?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, p1);
			psmt.setString(2, p2);
			psmt.setString(3, p3);
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력.");

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (psmt != null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (conn != null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		String json ="{\"사용id\":" + p1 + ",\"이름\":\"" +p2+ "\",\"비밀번호\":"+p3+",\"연락처\":" +p4+ "\",\"성별\":"+p5+"}";
		response.getWriter().print(json);
	}

}
