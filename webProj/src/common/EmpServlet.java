package common;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/empList.do") // 주소명 지정
public class EmpServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();

		String dept = req.getParameter("dept");

		EmpDAO dao = new EmpDAO();

		List<Employee> list = null;
		if (dept == null) {
			list = dao.getEmpList();
		} else {
			list = dao.getEmpByDept(dept);
		}

		String jsonData = "[";
		// [{"empID":?, "fName:"?. "lName":"?"}, , ]
		int cnt = 0;
		for (Employee emp : list) {
			jsonData += "{\"empId\":\"" + emp.getEmployeeId()//
					+ "\", \"fName\" :\"" + emp.getFirstName()//
					+ "\", \"lName\" :\"" + emp.getLastName()//
					+ "\", \"email\" :\"" + emp.getEmail()//
					+ "\", \"salary\" :\"" + emp.getSalary()//
					+ "\", \"hire_date\" :\"" + emp.getHireDate()//
					+ "\", \"job_id\" :\"" + emp.getJobId()//
					+ "\"}";
			if (++cnt == list.size()) {
				continue;
			}
			jsonData += ", \n ";
		}
		jsonData += "]";

		out.println(jsonData);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String firstName = req.getParameter("first_name");
		String lastName = req.getParameter("last_name");
		String email = req.getParameter("email");
		String hireDate = req.getParameter("hire_date");
		String jobId = req.getParameter("job_id");
		String salary = req.getParameter("salary");
		//salary 값이 null일 경우에는 0, 아니면 integer.parseInt()
		int sal = (salary == null ? 0 :Integer.parseInt(salary));
		
		Employee emp = new Employee();
		emp.setFirstName(firstName);
		emp.setLastName(lastName);
		emp.setEmail(email);
		emp.setHireDate(hireDate);
		emp.setJobId(jobId);
		emp.setSalary(sal);

		
		EmpDAO dao = new EmpDAO();
		Employee empl = dao.insertEmpBySeq(emp);
		// {"eid":"?", "fName":"?".......}

		PrintWriter out = resp.getWriter();
		out.print("{\"employee_id\":\"" + empl.getEmployeeId() + "\"," //
				+ "\"first_name\":\"" + empl.getFirstName() + "\"," //
				+ "\"last_name\":\"" + empl.getLastName() + "\"," //
				+ "\"email\":\"" + empl.getEmail() + "\"," //
				+ "\"hire_date\":\"" + empl.getHireDate() + "\"," //
				+ "\"job_id\":\"" + empl.getJobId() + "\"," //
				+ "\"salary\":\"" + empl.getSalary() + "\"" //
				+ "}");

	}
}
